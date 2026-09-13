using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CourseApi.Data;
using CourseApi.DTOs;
using CourseApi.Models;
using Microsoft.EntityFrameworkCore;

namespace CourseApi.services
{
    public class CourseService(ApiDbContext dbContext) : ICourseService
    {
        private IQueryable<CourseResponseDto> GetCoursesQuery()
        {
            DateOnly today = DateOnly.FromDateTime(DateTime.UtcNow);

            return dbContext.Courses
                .Include(c => c.Category)
                .Include(c => c.Attendants)
                .Where(c => c.StartDate > today)
                .Select(c => new CourseResponseDto
                {
                    Id = c.Id,
                    Title = c.Title,
                    StartDate = c.StartDate,
                    EndDate = c.EndDate,
                    Price = c.Price,
                    MaxCapacity = c.MaxCapacity,
                    AttendantsCount = c.Attendants != null ? c.Attendants.Count : 0,
                    CategoryName = c.Category != null ? c.Category.Name : "Brak kategorii",
                }
            );
        }

        public async Task<IEnumerable<CourseResponseDto>> GetCourses()
        {
            return await GetCoursesQuery().ToListAsync();
        }

        public async Task<CourseResponseDto?> GetCourse(int id)
        {
            return await GetCoursesQuery().FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<(bool Success, string? Error)> AddCourse(CourseAddDto dto)
        {
            var course = new Course
            {
                Title = dto.Title,
                StartDate = (DateOnly)dto.StartDate,
                EndDate = (DateOnly)dto.EndDate,
                Price = (float)dto.Price,
                MaxCapacity = (int)dto.MaxCapacity,
                CategoryId = (int)dto.CategoryId
            };

            dbContext.Courses.Add(course);
            await dbContext.SaveChangesAsync();
            return (true, null);
        }
    }
}