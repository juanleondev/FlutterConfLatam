import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // FlutterConfLatam 2025 documentation sidebar
  eventSidebar: [
    "intro",
    {
      type: "category",
      label: "📋 Información General",
      items: [
        "informacion-general/informacion-evento",
        "informacion-general/objetivos-metas",
        "informacion-general/historial-ediciones",
      ],
    },
    {
      type: "category",
      label: "🎯 Ejes de Organización",
      items: [
        "ejes-organizacion/agenda-experiencia",
        "ejes-organizacion/finanzas-legal",
        "ejes-organizacion/operacion-staff",
        "ejes-organizacion/speakers",
        "ejes-organizacion/sponsors",
        "ejes-organizacion/tickets-marketing",
        "ejes-organizacion/venue-espacios",
      ],
    },
    {
      type: "category",
      label: "🚚 Logística y Proveedores",
      items: [
        "logistica-proveedores/audiovisuales",
        "logistica-proveedores/catering",
        "logistica-proveedores/diseno-branding",
        "logistica-proveedores/hoteles",
      ],
    },
    {
      type: "category",
      label: "📢 Comunicación",
      items: [
        "comunicacion/comunicacion-interna",
        "comunicacion/estrategia-comunicacion",
        "comunicacion/redes-sociales",
        "comunicacion/templates-email",
      ],
    },
    {
      type: "category",
      label: "📊 Post-Evento",
      items: [
        "post-evento/evaluacion-feedback",
        "post-evento/metricas-reportes",
        "post-evento/seguimiento",
      ],
    },
    {
      type: "category",
      label: "📝 Templates",
      items: ["templates/checklists", "templates/formularios"],
    },
    {
      type: "category",
      label: "❓ FAQ",
      items: ["faq/preguntas-frecuentes", "faq/troubleshooting"],
    },
  ],
};

export default sidebars;
