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
    public class AttendantService(ApiDbContext dbContext) : IAttendantService
    {
        public async Task<(bool Success, string? Error)> AddAttendant(AttendantRegistrationDto dto)
        {
            var course = await dbContext.Courses
                .Where(c => c.Id == dto.CourseId)
                .Select(c => new
                {
                    c.StartDate,
                    c.MaxCapacity,
                    AttendantsCount = c.Attendants != null ? c.Attendants.Count : 0,
                    AttendantAlreadyRegistered = c.Attendants != null && c.Attendants.Any(
                        a => a.Email.ToLower() == dto.Email.ToLower() && a.Phone == dto.Phone && a.CourseId == dto.CourseId
                    )
                })
                .FirstOrDefaultAsync();

            if (course == null)
            {
                return (false, "Kurs nie istnieje");
            }

            DateOnly today = DateOnly.FromDateTime(DateTime.UtcNow);

            if (course.StartDate <= today)
            {
                return (false, "Zapisy na kurs upłyneły");
            }

            if (course.AttendantsCount >= course.MaxCapacity)
            {
                return (false, "Brak miejsc na wybrany kurs");
            }

            if (course.AttendantAlreadyRegistered)
            {
                return (false, "Jesteś już zapisany na ten kurs");
            }

            var attendant = new Attendant
            {
                Name = dto.Name,
                Surname = dto.Surname,
                Phone = dto.Phone,
                Email = dto.Email,
                CourseId = dto.CourseId
            };

            dbContext.Attendants.Add(attendant);
            await dbContext.SaveChangesAsync();

            return (true, null);
        }
    }
}