using Casestudy.DAL.DomainClasses;
using Casestudy.Helpers;
using Castle.Components.DictionaryAdapter.Xml;
using Microsoft.EntityFrameworkCore;

namespace Casestudy.DAL.DAO
{
    public class OrderDAO
    {
        private readonly AppDbContext _db;
        public OrderDAO(AppDbContext ctx)
        {
            _db = ctx;
        }
        public async Task<int> AddOrder(int customerid, OrderSelectionHelper[] selections)
        {
            int orderId = -1;
            // we need a transaction as multiple entities involved
            using (var _trans = await _db.Database.BeginTransactionAsync())
            {
                try
                {
                    Order order = new();
                    order.OrderDate = DateTime.Now;
                    order.OrderAmount = 0;
                    order.CustomerId = customerid;
                    // calculate the totals and then add the tray row to the table
                    foreach (OrderSelectionHelper selection in selections)
                    {
                        order.OrderAmount += selection.Qty * selection.Item!.CostPrice;
                    }
                    await _db.Orders!.AddAsync(order);
                    await _db.SaveChangesAsync();
                    // then add each item to the trayitems table
                    foreach (OrderSelectionHelper selection in selections)
                    {
                        OrderLineitem tItem = new();
                        tItem.OrderId = order.Id;
                        tItem.ProductId = selection.Item!.Id;
                        if(selection.Qty <= selection.Item.QtyOnHand)
                        {
                            selection.Item.QtyOnHand -= selection.Qty;
                            tItem.QtySold = selection.Qty;
                            tItem.QtyOrdered = selection.Qty;
                            tItem.QtyBackOrdered = 0;
                        } else if(selection.Qty > selection.Item.QtyOnHand)
                        {
                            selection.Item.QtyOnBackOrder = selection.Qty - selection.Item.QtyOnHand;
                            selection.Item.QtyOnHand = 0;
                            tItem.QtySold = selection.Qty - selection.Item.QtyOnBackOrder;
                            tItem.QtyOrdered = selection.Qty;
                            tItem.QtyBackOrdered = selection.Item.QtyOnBackOrder;
                        }
                        tItem.SellingPrice = tItem.QtyOrdered * selection.Item.MSRP;
                        await _db.OrderLineitems!.AddAsync(tItem);
                        await _db.SaveChangesAsync();
                    }
                    // test trans by uncommenting out these 3 lines
                    //int x = 1;
                    //int y = 0;
                    //x = x / y;
                    await _trans.CommitAsync();
                    orderId = order.Id;
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    await _trans.RollbackAsync();
                }
            }
            return orderId;
        }

        public async Task<List<Order>> GetAll(int id)
        {
            return await _db.Orders!.Where(cart => cart.CustomerId == id).ToListAsync<Order>();
        }

        public async Task<List<OrderDetailsHelper>> GetOrderDetails(int tid, string email)
        {
            Customer? user = _db.Customers!.FirstOrDefault(user => user.Email == email);
            List<OrderDetailsHelper> allDetails = new();
            // LINQ way of doing INNER JOINS
            var results = from o in _db.Orders
                          join oli in _db.OrderLineitems! on o.Id equals oli.OrderId
                          join p in _db.Products! on oli.ProductId equals p.Id
                          where (o.CustomerId == user!.Id && o.Id == tid)
                          select new OrderDetailsHelper
                          {
                              OrderId = o.Id,
                              ProductId = oli.ProductId,
                              ProductName = p.ProductName,
                              Description = p.Description,
                              CustomerId = o.CustomerId,
                              DateCreated = o.OrderDate,
                              QtyS = oli.QtySold,
                              QtyO = oli.QtyOrdered,
                              QtyB = oli.QtyBackOrdered,
                              TotalPrice = oli.SellingPrice
                          };
            allDetails = await results.ToListAsync();
            return allDetails;
        }

    }
}
