import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Contato() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Entre em Contato"
        subtitle="Estamos prontos para ajudar sua empresa a alcançar novos patamares"
        showGradient={false}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Envie sua mensagem</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Informações de Contato</h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Endereços</h3>
                          <p className="text-sm text-muted-foreground">Campinas/SP</p>
                          <p className="text-sm text-muted-foreground">São Paulo/SP</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MessageCircle className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">WhatsApp</h3>
                          <a
                            href="https://wa.me/5519993216091"
                            className="text-sm text-primary hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="link-whatsapp"
                          >
                            +55 (19) 99321-6091
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">E-mail</h3>
                          <a
                            href="mailto:contato@ospcontabilidade.com.br"
                            className="text-sm text-primary hover:underline"
                            data-testid="link-email"
                          >
                            contato@ospcontabilidade.com.br
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Horário de Atendimento</h3>
                          <p className="text-sm text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-card-border">
                <h3 className="font-semibold mb-2">Atendimento Nacional e Internacional</h3>
                <p className="text-sm text-muted-foreground">
                  Atendemos empresas em todo Brasil (14 estados) e em 12 países. 
                  Nossa equipe está preparada para atender suas necessidades onde quer que você esteja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
