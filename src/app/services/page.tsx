// src/app/services/page.tsx
import ServicesHero from '@/components/services/ServicesHero';
import ServiceRelease from '@/components/services/ServiceRelease';
import ServiceEvents from '@/components/services/ServiceEvents';
import ServiceBranding from '@/components/services/ServiceBranding';
import ServiceArtDirection from '@/components/services/ServiceArtDirection';
import ServiceFashionStyling from '@/components/services/ServiceFashionStyling';
import ServiceStylingVideoclips from '@/components/services/ServiceStylingVideoclips';
import ServicePRFashion from '@/components/services/ServicePRFashion';
import ServiceSocialMedia from '@/components/services/ServiceSocialMedia';
import ServiceArtistExperiences from '@/components/services/ServiceArtistExperiences';
import ServiceGiftingPRKits from '@/components/services/ServiceGiftingPRKits';


export default function ServicesPage() {
    return (
        <main className="bg-white">
        <ServicesHero />
        
        <ServiceRelease />
        
        <ServiceEvents />

        <ServiceBranding />

        <ServiceArtDirection />
        
        <ServiceFashionStyling />        

        <ServiceStylingVideoclips />

        <ServicePRFashion />

        <ServiceSocialMedia />

        <ServiceArtistExperiences />

        <ServiceGiftingPRKits />

        </main>
    );
}