using Casestudy.DAL.DAO;
using Casestudy.DAL.DomainClasses;
using Casestudy.DAL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Casestudy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ProductController : ControllerBase
    {
        readonly AppDbContext? _ctx;
        public ProductController(AppDbContext context) // injected here
        {
            _ctx = context;
        }

        [HttpGet]
        [Route("{brandid}")]
        [AllowAnonymous]
        public async Task<ActionResult<List<Product>>> Index(int brandid)
        {
            ProductDAO dao = new(_ctx!);
            List<Product> itemsForBrand = await dao.GetAllByBrand(brandid);
            return itemsForBrand;
        }
    }
}
