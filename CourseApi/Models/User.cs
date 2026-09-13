using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace CourseApi.Models
{
    public class User : IdentityUser
    {
        public string? Name { get; set; }
        public string? Surname { get; set; }
        public DateTime UserSince { get; set; }
        public DateTime UserValidUnti { get; set; }
    }
}