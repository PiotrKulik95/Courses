using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CourseApi.DTOs;
using CourseApi.services;
using Microsoft.AspNetCore.Mvc;

namespace CourseApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AttendantController(IAttendantService attendantService) : ControllerBase
    {
        [HttpPost]
        public async Task<ActionResult> AddAttendant([FromBody] AttendantRegistrationDto dto)
        {
            var (Success, Error) = await attendantService.AddAttendant(dto);

            if (Success)
            {
                return Ok(new
                {
                    success = Success,
                    message = "Użytkownik dodany"
                });
            }
            else
            {
                return BadRequest(new
                {
                    success = Success,
                    message = Error
                });
            }
        }
    }
}