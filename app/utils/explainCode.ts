/**
 * explainCode — Line-by-line code explanation utility.
 *
 * Dual-mode, mirroring the server's Simulation Mode pattern:
 *   - When a real LLM endpoint is wired up, replace the body of `explainCode`
 *     with a fetch to that endpoint (see the TODO below).
 *   - Until then, `simulateLineExplanation` provides heuristic-based
 *     placeholder explanations so the UI is fully functional.
 */

export interface LineExplanation {
  line: number;
  code: string;
  explanation: string;
}

// ---------------------------------------------------------------------------
// Simulation engine — pattern-matching heuristics, no network required
// ---------------------------------------------------------------------------

function simulateLineExplanation(codeLine: string, isIndo: boolean): string {
  const t = codeLine.trim();

  if (!t) {
    return isIndo ? "Baris kosong." : "Empty line.";
  }

  // Comments
  if (/^(\/\/|#|\/\*|\*\/|<!--|\*\s|\*$)/.test(t)) {
    return isIndo
      ? "Komentar — catatan programmer yang diabaikan komputer saat dijalankan."
      : "Comment — a programmer note that the computer ignores at runtime.";
  }

  // Import / include / require
  if (/^(import\b|from\b.+import|require\s*\(|#include\b|using\b)/.test(t)) {
    return isIndo
      ? "Mengimpor modul atau pustaka eksternal agar fiturnya bisa digunakan."
      : "Imports an external module or library to use its features.";
  }

  // Class definition
  if (/^(class\s|abstract\s+class\s|interface\s)/.test(t)) {
    return isIndo
      ? "Mendefinisikan kelas — blueprint untuk membuat objek."
      : "Defines a class — a blueprint for creating objects.";
  }

  // Function / method definition
  if (
    /^(def\s|function\s|async\s+function\s|async\s+def\s)/.test(t) ||
    /\b(public|private|protected|static)\b.*\b(void|int|string|bool|float|double|auto)\b.*\(/.test(t)
  ) {
    return isIndo
      ? "Mendefinisikan fungsi — blok kode yang dapat dipanggil ulang."
      : "Defines a function — a reusable block of code.";
  }

  // Conditional
  if (/^(if\b|elif\b|else\b|else\s*if\b|switch\b|case\b)/.test(t)) {
    return isIndo
      ? "Kondisional — menjalankan kode hanya jika kondisi tertentu terpenuhi."
      : "Conditional — runs code only if a specific condition is true.";
  }

  // Loop
  if (/^(for\b|while\b|foreach\b|do\b)/.test(t)) {
    return isIndo
      ? "Perulangan — mengulang blok kode beberapa kali."
      : "Loop — repeats a block of code multiple times.";
  }

  // Return
  if (/^return\b/.test(t)) {
    return isIndo
      ? "Mengembalikan nilai dari fungsi ke pemanggilnya."
      : "Returns a value from the function back to its caller.";
  }

  // Output / print
  if (/\b(print\s*\(|console\.log\s*\(|System\.out\.print|cout\s*<<|printf\s*\(|echo\b)/.test(t)) {
    return isIndo
      ? "Menampilkan informasi ke layar atau konsol."
      : "Outputs information to the screen or console.";
  }

  // Variable declaration
  if (/^(let\b|const\b|var\b)/.test(t) || /\b(int|float|double|string|bool|char)\s+\w+/.test(t)) {
    return isIndo
      ? "Mendeklarasikan variabel untuk menyimpan data."
      : "Declares a variable to store data.";
  }

  // Assignment (has = but not ==, !=, <=, >=, =>)
  if (/(?<![=!<>])=(?!=)/.test(t)) {
    return isIndo
      ? "Menetapkan nilai ke variabel atau properti."
      : "Assigns a value to a variable or property.";
  }

  // Closing brace / bracket
  if (/^[}\])]/.test(t)) {
    return isIndo
      ? "Menutup blok kode (fungsi, kondisi, loop, atau objek)."
      : "Closes a code block (function, conditional, loop, or object).";
  }

  // Opening brace / bracket only
  if (/^[{[(]$/.test(t)) {
    return isIndo
      ? "Membuka blok kode atau struktur data."
      : "Opens a code block or data structure.";
  }

  // Default fallback
  return isIndo
    ? "Menjalankan instruksi atau ekspresi pada baris ini."
    : "Executes an instruction or expression on this line.";
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Explain `code` line by line and return one entry per line.
 *
 * TODO: Replace this function body with a real LLM API call when ready.
 * Suggested contract:
 *   POST /api/explain-lines
 *   Body:     { code: string, targetLanguage: "id" | "en" }
 *   Response: { lines: LineExplanation[] }
 *
 * Example (replace the return statement below):
 *   const res = await fetch(`${API_URL}/api/explain-lines`, {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify({ code, targetLanguage }),
 *   });
 *   const data = await res.json();
 *   return data.lines;
 */
export function explainCode(
  code: string,
  targetLanguage: "id" | "en" = "id"
): LineExplanation[] {
  const isIndo = targetLanguage === "id";

  // --- Simulation mode (replace this block with the fetch above) ---
  return code.split("\n").map((codeLine, i) => ({
    line: i + 1,
    code: codeLine,
    explanation: simulateLineExplanation(codeLine, isIndo),
  }));
}
