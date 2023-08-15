using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Casestudy.DAL.DomainClasses
{
    public class OrderLineitem
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [ForeignKey("OrderId")]
        public int OrderId { get; set; } // needs to be a FK

        [Required]
        [ForeignKey("ProductId")]
        public string? ProductId { get; set; } // needs to be a FK
        [Required]
        public int QtyOrdered { get; set; }
        [Required]
        public int QtySold { get; set; }
        [Required]
        public int QtyBackOrdered { get; set; }
        [Required]
        [Column(TypeName = "money")]
        public decimal SellingPrice { get; set; }
    }
}
