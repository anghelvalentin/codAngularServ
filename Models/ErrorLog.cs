using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MvcAngularJSQuiz.Models
{
    public class ErrorLog
    {
        public int Id { get; set; }

        [Required]
        public string Source { get; set; }

        [Required]
        public string ErrorMessage { get; set; }

        [Required]
        public string StackTrace { get; set; }

        
        public DateTime RecordStamp { get; set; }
    }
}