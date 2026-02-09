import { useState, Suspense, lazy } from 'react';
import { Button, Input, Card, Modal, Accordion } from './components/ui';
import { Header } from './components/layout';
import { Hero } from './components/sections';

// Lazy load sections below the fold
const Features = lazy(() => import('./components/sections').then(module => ({ default: module.Features })));
const Pricing = lazy(() => import('./components/sections').then(module => ({ default: module.Pricing })));
const FAQ = lazy(() => import('./components/sections').then(module => ({ default: module.FAQ })));
const Contact = lazy(() => import('./components/sections').then(module => ({ default: module.Contact })));

function LoadingFallback() {
  return <div style={{ padding: '4rem', textAlign: 'center' }}>Yükleniyor...</div>;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />
      <main>
        <Hero />

        <Suspense fallback={<LoadingFallback />}>
          <Features />
          <Pricing />
          <FAQ />
          <Contact />
        </Suspense>

        <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
          <h1>Mini Landing Lib - Bileşen Önizleme</h1>

          <section style={{ marginBottom: '2rem' }}>
            <h2>Buttons</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button disabled>Disabled</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
              <Button isLoading>Loading</Button>
            </div>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2>Inputs</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Input label="Email" placeholder="ornek@email.com" />
              <Input label="Ad Soyad" placeholder="Adınız" helperText="Tam adınızı giriniz" />
              <Input label="Hatalı Giriş" value="yanlış değer" error="Geçersiz format" readOnly />
              <Input placeholder="Labelsiz input" />
            </div>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2>Cards</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <Card>
                <h3>Default Card</h3>
                <p>This is a standard card component.</p>
              </Card>
              <Card variant="elevated">
                <h3>Elevated Card</h3>
                <p>This card has a shadow.</p>
              </Card>
              <Card variant="outlined">
                <h3>Outlined Card</h3>
                <p>This card has a transparent background.</p>
              </Card>
              <Card interactive>
                <h3>Interactive Card</h3>
                <p>Hover over me!</p>
              </Card>
            </div>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2>Modal</h2>
            <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Example Modal"
              footer={
                <>
                  <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                  <Button onClick={() => setIsModalOpen(false)}>Confirm</Button>
                </>
              }
            >
              <p>This is a reusable modal component.</p>
              <p>It has a focus trap, overlay click to close, and escape key support.</p>
            </Modal>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2>Accordion</h2>
            <Accordion
              items={[
                { id: '1', title: 'Soru 1: Bu proje nedir?', content: 'Bu, React + Vite ile hazırlanmış mini bir landing page projesidir.' },
                { id: '2', title: 'Soru 2: Hangi teknolojiler kullanıldı?', content: 'React, TypeScript, SCSS ve Vite kullanıldı. Hiçbir UI kütüphanesi kullanılmadı.' },
                { id: '3', title: 'Soru 3: Erişilebilir mi?', content: 'Evet, tüm bileşenler WAI-ARIA standartlarına uygun olarak geliştirildi.' },
              ]}
            />
          </section>
        </div>
      </main>
    </>
  )
}

export default App
