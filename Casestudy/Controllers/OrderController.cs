using Casestudy.DAL;
using Casestudy.DAL.DAO;
using Casestudy.DAL.DomainClasses;
using Casestudy.Helpers;
using Castle.Components.DictionaryAdapter.Xml;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Razor.TagHelpers;

namespace Casestudy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class OrderController : ControllerBase
    {
        readonly AppDbContext? _ctx;
        public OrderController(AppDbContext context) // injected here
        {
            _ctx = context;
        }
        [HttpPost]
        [Produces("application/json")]
        [AllowAnonymous]
        public async Task<ActionResult<string>> Index(OrderHelper helper)
        {
            string retVal;
            try
            {
                CustomerDAO cDao = new(_ctx!);
                Customer? cartOwner = await cDao.GetByEmail(helper.Email);
                OrderDAO oDao = new(_ctx!);
                int cartId = await oDao.AddOrder(cartOwner!.Id, helper.Selections!);
                retVal = cartId > 0
                ? "Cart " + cartId + " saved!"
                : "Cart not saved";
            }
            catch (Exception ex)
            {
                retVal = "Cart not saved　（" + ex.Message + ")";
            }
            return retVal;
        }

        [Route("{email}")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<List<Order>>> List(string email)
        {
            List<Order> carts;
            CustomerDAO cDao = new(_ctx!);
            Customer? cartOwner = await cDao.GetByEmail(email);
            OrderDAO oDao = new(_ctx!);
            carts = await oDao.GetAll(cartOwner!.Id);
            return carts;
        }
        [Route("{cartid}/{email}")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<List<OrderDetailsHelper>>> GetTrayDetails(int cartid, string email)
        {
            OrderDAO dao = new(_ctx!);
            return await dao.GetOrderDetails(cartid, email);
        }
    }
}
