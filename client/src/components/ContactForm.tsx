import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { submitContactForm } from "@/lib/firestore";
import { Loader2 } from "lucide-react";

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    purpose: "",
    sector: "",
    employees: "",
    taxRegime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Firestore (which will trigger Cloud Function to sync to CRM)
      await submitContactForm(formData);
      
      // Show success message
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
        purpose: "",
        sector: "",
        employees: "",
        taxRegime: "",
        message: "",
      });
    } catch (error) {
      // Show error message
      toast({
        title: "Erro ao enviar",
        description: "Não foi possível enviar sua mensagem. Por favor, tente novamente.",
        variant: "destructive",
      });
      console.error("Error submitting contact form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto" aria-label={t('contact.form.title')}>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="purpose">
            {t('contact.form.purpose')} {t('contact.form.required')}
          </Label>
          <Select 
            value={formData.purpose} 
            onValueChange={(value) => handleSelectChange('purpose', value)}
            required
          >
            <SelectTrigger id="purpose" data-testid="select-purpose">
              <SelectValue placeholder={t('contact.form.purposePlaceholder')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="open-company">{t('contact.form.purposeOptions.openCompany')}</SelectItem>
              <SelectItem value="change-accountant">{t('contact.form.purposeOptions.changeAccountant')}</SelectItem>
              <SelectItem value="consulting">{t('contact.form.purposeOptions.consulting')}</SelectItem>
              <SelectItem value="other">{t('contact.form.purposeOptions.other')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="sector">
            {t('contact.form.sector')} {t('contact.form.required')}
          </Label>
          <Select 
            value={formData.sector} 
            onValueChange={(value) => handleSelectChange('sector', value)}
            required
          >
            <SelectTrigger id="sector" data-testid="select-sector">
              <SelectValue placeholder={t('contact.form.sectorPlaceholder')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="industry">{t('segments.industry.name')}</SelectItem>
              <SelectItem value="multinationals">{t('segments.multinationals.name')}</SelectItem>
              <SelectItem value="technology">{t('segments.technology.name')}</SelectItem>
              <SelectItem value="health">{t('segments.health.name')}</SelectItem>
              <SelectItem value="education">{t('segments.education.name')}</SelectItem>
              <SelectItem value="commerce">{t('segments.commerce.name')}</SelectItem>
              <SelectItem value="other">{t('contact.form.sectorOptions.other')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="employees">{t('contact.form.employees')}</Label>
          <Select 
            value={formData.employees} 
            onValueChange={(value) => handleSelectChange('employees', value)}
          >
            <SelectTrigger id="employees" data-testid="select-employees">
              <SelectValue placeholder={t('contact.form.employeesPlaceholder')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-10">{t('contact.form.employeesOptions.1-10')}</SelectItem>
              <SelectItem value="11-50">{t('contact.form.employeesOptions.11-50')}</SelectItem>
              <SelectItem value="51-200">{t('contact.form.employeesOptions.51-200')}</SelectItem>
              <SelectItem value="201-500">{t('contact.form.employeesOptions.201-500')}</SelectItem>
              <SelectItem value="500+">{t('contact.form.employeesOptions.500+')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="taxRegime">{t('contact.form.taxRegime')}</Label>
          <Select 
            value={formData.taxRegime} 
            onValueChange={(value) => handleSelectChange('taxRegime', value)}
          >
            <SelectTrigger id="taxRegime" data-testid="select-tax-regime">
              <SelectValue placeholder={t('contact.form.taxRegimePlaceholder')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="simples-nacional">{t('contact.form.taxRegimeOptions.simplesNacional')}</SelectItem>
              <SelectItem value="lucro-real">{t('contact.form.taxRegimeOptions.lucroReal')}</SelectItem>
              <SelectItem value="lucro-presumido">{t('contact.form.taxRegimeOptions.lucroPresumido')}</SelectItem>
              <SelectItem value="other">{t('contact.form.taxRegimeOptions.other')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
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

      <Button 
        type="submit" 
        size="lg" 
        className="w-full md:w-auto" 
        data-testid="button-submit-contact"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t('contact.form.sending') || 'Enviando...'}
          </>
        ) : (
          t('contact.form.submit')
        )}
      </Button>
    </form>
  );
}
