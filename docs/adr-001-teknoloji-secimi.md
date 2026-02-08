# ADR 001: Teknoloji Seçimi ve Mimari Kararlar

**Tarih:** 2026-02-07
**Durum:** Kabul Edildi

## Bağlam (Context)
Kullanıcı, 4 günlük bir süre içinde "Mini Landing Page" ve "Custom Component Library" içeren bir proje talep etti. Projenin modern web standartlarına uygun, erişilebilir, performanslı olması ve harici UI kütüphaneleri (MUI, Tailwind vb.) kullanılmadan geliştirilmesi istendi.

## Karar (Decision)
Aşağıdaki teknoloji yığını ve mimari yaklaşımlar seçilmiştir:

1.  **React + TypeScript:**
    *   **Neden:** Tip güvenliği, bileşen tabanlı yapı ve geniş ekosistem desteği.
    *   **Build Tool:** Vite (Hızlı geliştirme ve optimize edilmiş build süreci için).

2.  **SCSS (Sass Modules):**
    *   **Neden:** Stil izolasyonu (CSS Modules) sağlamak, global ad alanı kirliliğini önlemek.
    *   **Yapı:** `_variables.scss` ile tema yönetimi, `_mixins.scss` ile responsive tasarım kolaylığı.
    *   **Tema Yönetimi:** CSS Variables ve `[data-theme='dark']` seçicisi kullanılarak dinamik tema değişimi (Dark/Light Mode) sağlandı. Kullanıcı tercihi `localStorage`'da saklanır.
    *   **Kaçınılan:** Tailwind CSS (Kullanıcı talebi "harici kütüphane kullanma" yönünde olduğu için ve CSS temellerini demonstratif göstermek amacıyla).

3.  **UI Bileşenleri (Sıfırdan Geliştirme):**
    *   **Karar:** Tüm temel bileşenler (`Button`, `Input`, `Card`, `Modal`, `Accordion`) sıfırdan yazıldı.
    *   **Odak:** Erişilebilirlik (A11y). WAI-ARIA nitelikleri (`aria-expanded`, `aria-label`, `role="dialog"` vb.) ve klavye navigasyonu (Focus trap) manuel olarak uygulandı.

4.  **Responsive Tasarım:**
    *   **Yaklaşım:** Mobile-First.
    *   **Uygulama:** SCSS mixin'leri (`@include mobile`, `@include tablet`) ile breakpoint yönetimi.

5.  **Performans:**
    *   **Karar:** `React.lazy` ve `Suspense` kullanılarak bölüm bazlı Code Splitting uygulandı.
    *   **Görseller:** WebP formatı ve lazy loading (native ve component lazy loading) tercih edildi.

## Sonuçlar (Consequences)
*   **Pozitif:** Dış bağımlılık minimuma indirildi. Tam kontrol sağlandı. CSS ve React yetkinlikleri doğrudan sergilendi.
*   **Negatif:** Bileşen geliştirme süresi hazır kütüphanelere göre daha uzun sürdü (fakat kapsam küçük olduğu için yönetilebilir kaldı).
