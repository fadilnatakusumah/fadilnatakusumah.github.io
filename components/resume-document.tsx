"use client"

import { trackEvent } from "@/lib/analytics"
import { FiDownload, FiExternalLink } from "react-icons/fi"

const RESUME_PDF = "/assets/resume.pdf"

export function ResumeDocument() {
  return (
    <div className="flex h-[75vh] flex-col lg:h-[calc(100vh-12rem)]">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-slate-200">
          Resume
        </h2>
        <div className="flex items-center gap-5 text-xs font-bold uppercase tracking-widest">
          <a
            href={RESUME_PDF}
            download="MuhammadFadhilahMulyana-Resume.pdf"
            onClick={() => trackEvent("resume_download")}
            className="flex items-center gap-1.5 text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-200"
          >
            <FiDownload aria-hidden /> Download
          </a>
          <a
            href={RESUME_PDF}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent("resume_open")}
            className="flex items-center gap-1.5 text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-200"
          >
            <FiExternalLink aria-hidden /> Open
          </a>
        </div>
      </div>

      {/* Browsers render PDFs natively; <object> shows its fallback where inline
          PDFs are unsupported (most mobile browsers). */}
      <object
        data={RESUME_PDF}
        type="application/pdf"
        aria-label="Resume of Muhammad Fadhilah Mulyana"
        className="min-h-0 w-full flex-1 rounded-lg border border-slate-200 bg-white dark:border-slate-700"
      >
        <a
          href={RESUME_PDF}
          target="_blank"
          rel="noreferrer"
          className="text-slate-600 underline dark:text-slate-400"
        >
          This browser can&apos;t preview PDFs — open the resume instead.
        </a>
      </object>
    </div>
  )
}