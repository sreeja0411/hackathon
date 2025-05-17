import React from "react";
import "./LibraryPage.css";

const generalLaws = [
  {
    title: "Constitutional Law",
    description:
      "Deals with the structure and functioning of the government, fundamental rights, and duties.",
    url: "https://en.wikipedia.org/wiki/Constitution_of_India",
  },
  {
    title: "Criminal Law",
    description:
      "Relates to crimes and punishments. Includes IPC and procedural laws like CrPC.",
    url: "https://en.wikipedia.org/wiki/Indian_Penal_Code",
  },
  {
    title: "Civil Law",
    description: "Covers non-criminal disputes such as property, contracts, and torts.",
    url: "https://en.wikipedia.org/wiki/Civil_law_(legal_system)",
  },
  {
    title: "Corporate Law",
    description: "Regulates companies, business organizations, and corporate governance.",
    url: "https://en.wikipedia.org/wiki/Corporate_law",
  },
  {
    title: "Family Law",
    description:
      "Deals with marriage, divorce, child custody, and inheritance based on personal laws.",
    url: "https://en.wikipedia.org/wiki/Family_law",
  },
  {
    title: "Property Law",
    description: "Covers ownership, transfer, and registration of immovable property.",
    url: "https://en.wikipedia.org/wiki/Property_law",
  },
  {
    title: "Labour Law",
    description:
      "Regulates employment, industrial relations, wages, and safety standards.",
    url: "https://en.wikipedia.org/wiki/Labour_law",
  },
  {
    title: "Tax Law",
    description: "Governs the taxation structure including income tax, GST, and customs.",
    url: "https://en.wikipedia.org/wiki/Tax_law",
  },
];

const featuredLaws = [
  {
    title: "Code of Criminal Procedure, 1973 (CrPC)",
    highlight: "Know Your Rights",
    description:
      "This law ensures fair procedures in criminal cases—from how police investigate, arrest, and charge people, to how courts decide on guilt or innocence. It protects citizens during criminal trials.",
    url: "https://en.wikipedia.org/wiki/Code_of_Criminal_Procedure,_1973",
  },
  {
    title: "Indian Penal Code, 1860 (IPC)",
    highlight: "What is a Crime?",
    description:
      "The IPC lists all acts considered crimes in India and sets punishments to keep society safe. It covers everything from theft and violence to fraud and defamation.",
    url: "https://en.wikipedia.org/wiki/Indian_Penal_Code",
  },
  {
    title: "Civil Procedure Code, 1908 (CPC)",
    highlight: "Settling Civil Disputes",
    description:
      "If you have a disagreement over money, property, or contracts, this law guides how courts handle such civil cases—making sure justice is done fairly and timely.",
    url: "https://en.wikipedia.org/wiki/Civil_Procedure_Code",
  },
  {
    title: "Indian Divorce Act, 1869 (IDA)",
    highlight: "Christian Marriages and Divorce",
    description:
      "For Christian families, this law governs how divorce and separation work, safeguarding rights related to marriage dissolution and support.",
    url: "https://en.wikipedia.org/wiki/Indian_Divorce_Act,_1869",
  },
];

export default function LibraryPage({ theme }) {  return (
    <div className={`library-container ${theme}`}>
      <h1 className="library-title">LegalGPT Law Library</h1>

      <section className="section">
        <h2 className="section-title">Types of Laws in India</h2>
        <div className="law-grid">
          {generalLaws.map((law, index) => (
            <a
              href={law.url}
              target="_blank"
              rel="noopener noreferrer"
              className="law-card"
              key={index}
            >
              <h3 className="law-title">{law.title}</h3>
              <p className="law-description">{law.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Featured Laws</h2>
        <div className="law-grid featured four-columns">
          {featuredLaws.map((law, index) => (
            <a
              href={law.url}
              target="_blank"
              rel="noopener noreferrer"
              className="law-card"
              key={index}
            >
              <h3 className="law-title">{law.title}</h3>
              <p className="highlight">{law.highlight}</p>
              <p className="law-description">{law.description}</p>
            </a>
          ))}
        </div>
      </section>
      </div>
    );
}
