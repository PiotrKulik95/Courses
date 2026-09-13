using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CourseApi.Data;
using CourseApi.DTOs;
using CourseApi.Models;
using CourseApi.services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CourseApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CourseController(ICourseService courseService) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseResponseDto>>> GetCourses()
        {
            var courses = await courseService.GetCourses();

            return Ok(courses);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CourseResponseDto>> GetCourse(int id)
        {
            var course = await courseService.GetCourse(id);

            if (course == null)
            {
                return NotFound("Brak kursu");
            }

            return Ok(course);
        }

        [Authorize]
        [HttpPost("add")]
        public async Task<ActionResult> AddCourse([FromBody] CourseAddDto course)
        {
            var newCourse = await courseService.AddCourse(course);

            if (newCourse.Success)
            {
                return Ok();
            }

            return NotFound();
        }
    }
}