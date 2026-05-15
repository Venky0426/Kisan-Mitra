import { useLanguage } from "./LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as any)}
      className="border p-2 rounded"
    >
      <option value="en">English</option>
      <option value="hi">Hindi</option>
      <option value="kn">Kannada</option>
      <option value="te">Telugu</option>
      <option value="ta">Tamil</option>
      <option value="mr">Marathi</option>
    </select>
  );
}
