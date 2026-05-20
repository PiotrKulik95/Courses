using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CourseApi.DTOs;

namespace CourseApi.services
{
    public interface IAttendantService
    {
        Task<(bool Success, string? Error)> AddAttendant(AttendantRegistrationDto dto);
    }
}