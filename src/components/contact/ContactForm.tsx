'use client';

import { useState, useMemo, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const projectTypes = [
  'Yeni İnşaat',
  'Kat Karşılığı',
  'Tadilat',
  'Dış Cephe',
  'Güçlendirme',
  'Kentsel Dönüşüm',
  'Endüstriyel Yapı',
  'Mimari Proje',
  'Diğer',
];

const budgetRanges = [
  '500.000 ₺ - 1.000.000 ₺',
  '1.000.000 ₺ - 3.000.000 ₺',
  '3.000.000 ₺ - 10.000.000 ₺',
  '10.000.000 ₺ ve üzeri',
  'Belirlenmedi',
];

const projectStatuses = ['Fikir Aşamasında', 'Fizibilite', 'Projelendirme', 'Uygulama Öncesi'];

export function ContactForm() {
  const params = useSearchParams();
  const [state, setState] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const defaultForm = useMemo(() => {
    const requested = params.get('form');
    if (requested === 'kat-karsiligi') return 'Kat Karşılığı';
    return '';
  }, [params]);

  const validate = (data: FormData) => {
    const err: Record<string, string> = {};
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const projectType = String(data.get('projectType') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const kvkk = data.get('kvkk');

    if (name.length < 2) err.name = 'Lütfen adınızı ve soyadınızı yazın.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) err.email = 'Geçerli bir e-posta adresi girin.';
    if (phone.replace(/\D/g, '').length < 10) err.phone = 'Lütfen geçerli bir telefon numarası girin.';
    if (!projectType) err.projectType = 'Proje türünü seçiniz.';
    if (message.length < 15) err.message = 'Kısa bir açıklama yazın (en az 15 karakter).';
    if (!kvkk) err.kvkk = 'Devam etmek için KVKK metnini onaylayın.';
    return err;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const validation = validate(data);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      setState('error');
      return;
    }
    setErrors({});
    setState('success');
    event.currentTarget.reset();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-6 md:grid-cols-2"
      noValidate
      aria-describedby="form-status"
    >
      <Field label="Ad Soyad" name="name" required error={errors.name} placeholder="Örn. Aylin Kaya" />
      <Field label="E-Posta" name="email" required type="email" error={errors.email} placeholder="ornek@eposta.com" />
      <Field label="Telefon" name="phone" required error={errors.phone} placeholder="+90 5xx xxx xx xx" />
      <Field label="Firma / Kurum" name="company" placeholder="Opsiyonel" />

      <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
        <SelectField
          label="Proje Türü"
          name="projectType"
          required
          defaultValue={defaultForm}
          options={projectTypes}
          error={errors.projectType}
        />
        <SelectField
          label="Bütçe Aralığı"
          name="budget"
          options={budgetRanges}
        />
      </div>

      <Field label="Şehir" name="city" placeholder="Örn. İstanbul" />
      <Field label="İlçe" name="district" placeholder="Örn. Kadıköy" />
      <Field label="Yaklaşık İnşaat Alanı" name="area" placeholder="Örn. 800 m²" />
      <SelectField label="Proje Durumu" name="status" options={projectStatuses} />

      <TextArea label="Proje Hakkında Notlarınız" name="message" required error={errors.message} rows={5} placeholder="Projenizi kısaca özetleyin..." />

      <div className="md:col-span-2">
        <label className="text-sm text-charcoal-700 uppercase tracking-ultra-wide">Ek Dosya (Opsiyonel)</label>
        <input
          type="file"
          name="attachment"
          className="mt-3 block w-full text-sm text-charcoal-800 file:mr-4 file:border file:border-charcoal-300 file:bg-white file:px-4 file:py-2 file:text-sm hover:file:bg-offwhite"
          accept="image/*,.pdf,.dwg"
        />
        <p className="mt-2 text-xs text-charcoal-500">Plan, kroki veya fotoğraf yükleyebilirsiniz. Maks. 10 MB.</p>
      </div>

      <div className="md:col-span-2 flex items-start gap-3">
        <input id="kvkk" type="checkbox" name="kvkk" className="mt-1" />
        <label htmlFor="kvkk" className="text-sm text-charcoal-700">
          <a href="/kvkk-aydinlatma-metni" className="link-underline text-ocean-700">KVKK aydınlatma metnini</a> okudum,
          verilerimin iletişim amacıyla işlenmesine izin veriyorum.
        </label>
      </div>
      {errors.kvkk && <p className="md:col-span-2 -mt-4 text-sm text-red-600">{errors.kvkk}</p>}

      <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <button type="submit" className="btn-primary">
          Formu Gönder
        </button>
        <div id="form-status" className="text-sm">
          {state === 'success' && (
            <div className="flex items-center gap-2 text-ocean-700">
              <CheckCircle2 className="h-5 w-5" strokeWidth={1.6} />
              <span>Mesajınız alındı. En kısa sürede size ulaşacağız.</span>
            </div>
          )}
          {state === 'error' && (
            <div className="flex items-center gap-2 text-red-600">
              <AlertCircle className="h-5 w-5" strokeWidth={1.6} />
              <span>Lütfen zorunlu alanları kontrol edin.</span>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  required,
  type = 'text',
  placeholder,
  error,
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-ultra-wide text-charcoal-500">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        className="mt-2 w-full border border-charcoal-200 bg-white px-4 py-3 text-charcoal-900 placeholder:text-charcoal-400 focus:border-ocean-700 focus:outline-none"
      />
      {error && <span className="mt-2 block text-sm text-red-600">{error}</span>}
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  defaultValue,
  required,
  error,
}: {
  label: string;
  name: string;
  options: string[];
  defaultValue?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-ultra-wide text-charcoal-500">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <select
        name={name}
        defaultValue={defaultValue ?? ''}
        aria-invalid={!!error}
        className="mt-2 w-full border border-charcoal-200 bg-white px-4 py-3 text-charcoal-900 focus:border-ocean-700 focus:outline-none"
      >
        <option value="">Seçiniz</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <span className="mt-2 block text-sm text-red-600">{error}</span>}
    </label>
  );
}

function TextArea({
  label,
  name,
  required,
  error,
  rows = 4,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <label className="block md:col-span-2">
      <span className="text-xs uppercase tracking-ultra-wide text-charcoal-500">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        aria-invalid={!!error}
        className="mt-2 w-full border border-charcoal-200 bg-white px-4 py-3 text-charcoal-900 placeholder:text-charcoal-400 focus:border-ocean-700 focus:outline-none"
      />
      {error && <span className="mt-2 block text-sm text-red-600">{error}</span>}
    </label>
  );
}
