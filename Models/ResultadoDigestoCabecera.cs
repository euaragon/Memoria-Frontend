using System;
using System.Text.Json.Serialization;

namespace Memoria2024.Models
{
    public class ResultadoDigestoCabecera
    {
        public int DigId { get; set; }
        public string? DigNumero { get; set; }
        public string? EntRazonSocial { get; set; }
        public DateTime? DigFEmision { get; set; }
        public DateTime? DigFPublicacion { get; set; }
        public DateTime? DigFVigencia { get; set; }
        public int? FalNumero { get; set; }
        public DateTime? FalFechaEmision { get; set; }
        public string? ExpNumero { get; set; }
        public int? ExpEjercicio { get; set; }
        public string? SecNombre { get; set; }
    }
}