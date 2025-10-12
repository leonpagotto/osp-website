import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: t('contact.form.successTitle'),
      description: t('contact.form.successDescription'),
    });
    // Reset form
    setFormData({
      name: "",
      company: "",
      role: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl" aria-label={t('contact.form.title')}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">
            {t('contact.form.name')} {t('contact.form.required')}
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            data-testid="input-name"
            aria-required="true"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">
            {t('contact.form.company')} {t('contact.form.required')}
          </Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            data-testid="input-company"
            aria-required="true"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="role">{t('contact.form.role')}</Label>
          <Input
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            data-testid="input-role"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">
            {t('contact.form.email')} {t('contact.form.required')}
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            data-testid="input-email"
            aria-required="true"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">
          {t('contact.form.phone')} {t('contact.form.required')}
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder={t('contact.form.phonePlaceholder')}
          data-testid="input-phone"
          aria-required="true"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          {t('contact.form.message')} {t('contact.form.required')}
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder={t('contact.form.messagePlaceholder')}
          data-testid="textarea-message"
          aria-required="true"
        />
      </div>

      <Button type="submit" size="lg" className="w-full md:w-auto" data-testid="button-submit-contact">
        {t('contact.form.submit')}
      </Button>
    </form>
  );
}
