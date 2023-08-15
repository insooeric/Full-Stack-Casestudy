﻿namespace Casestudy.Helpers
{
    public class OrderDetailsHelper
    {
        public int OrderId { get; set; }
        public string? ProductId { get; set; }
        public string? ProductName { get; set; }
        public string? Description { get; set; }
        public int CustomerId { get; set; }
        public DateTime? DateCreated { get; set; }
        public int QtyS { get; set; }
        public int QtyO { get; set; }
        public int QtyB { get; set; }
        public decimal TotalPrice { get; set; }
    }
}
