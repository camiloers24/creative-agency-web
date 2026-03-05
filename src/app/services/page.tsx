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
            
            {/* 04. RELEASE PARTIES */}
            <section id="release-parties" className="scroll-mt-20">
                <ServiceRelease />
            </section>
            
            <section id="events" className="scroll-mt-20">
                <ServiceEvents />
            </section>

            <section id="branding" className="scroll-mt-20">
                <ServiceBranding />
            </section>

            {/* 03. ART DIRECTION */}
            <section id="art-direction" className="scroll-mt-20">
                <ServiceArtDirection />
            </section>
            
            <section id="fashion-styling" className="scroll-mt-20">
                <ServiceFashionStyling />
            </section>

            {/* 01. STYLING VIDEOCLIPS */}
            <section id="styling-videoclips" className="scroll-mt-20">
                <ServiceStylingVideoclips />
            </section>

            <section id="pr-fashion" className="scroll-mt-20">
                <ServicePRFashion />
            </section>

            <section id="social-media" className="scroll-mt-20">
                <ServiceSocialMedia />
            </section>

            {/* 05. ARTIST EXPERIENCES */}
            <section id="artist-experiences" className="scroll-mt-20">
                <ServiceArtistExperiences />
            </section>

            {/* 02. GIFTING & PR KITS */}
            <section id="gifting-pr-kits" className="scroll-mt-20">
                <ServiceGiftingPRKits />
            </section>

        </main>
    );
}