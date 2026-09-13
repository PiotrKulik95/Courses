using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CourseApi.DTOs;
using CourseApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CourseApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController(UserManager<User> userManager, SignInManager<User> signInManager) : ControllerBase
    {
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<AuthUserDto>> GetUser()
        {
            var user = await userManager.GetUserAsync(User);

            if (user == null) return Unauthorized();

            var userDto = new AuthUserDto
            {
                Id = user.Id,
                Email = user.Email,
                Name = user.Name,
                Surname = user.Surname
            };

            return Ok(userDto);
        }

        [Authorize]
        [HttpPost("logout")]
        public async Task<ActionResult> Logout()
        {
            await signInManager.SignOutAsync();

            return Ok(new { message = "Wylogowano pomyślnie" });
        }
    }
}