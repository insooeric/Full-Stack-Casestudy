﻿using Casestudy.DAL;
using Casestudy.DAL.DAO;
using Casestudy.DAL.DomainClasses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Casestudy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class BrandController : ControllerBase
    {
        readonly AppDbContext? _ctx;
        public BrandController(AppDbContext context) // injected here
        {
            _ctx = context;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<List<Brand>>> Index()
        {
            BrandDAO dao = new(_ctx!);
            List<Brand> allBrands = await dao.GetAll();
            return allBrands;
        }
    }
}
