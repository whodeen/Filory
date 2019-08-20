using System;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace WebAPI.Models
{
    public class ApplicationUser : IdentityUser
    {
        [Column(TypeName ="varchar(150)")]
        public string Login { get; set; }
        
    }
}