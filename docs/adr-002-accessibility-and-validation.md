# ADR 002: Erişilebilirlik ve Form Validasyon Stratejisi

**Tarih:** 2026-02-09

## Durum (Context)
Projenin kullanıcı deneyimini ve erişilebilirlik standartlarını (WCAG) karşılaması gerekmektedir. Özellikle modal pencerelerde klavye odağının yönetimi ve formlarda kullanıcı hatalarının net bir şekilde iletilmesi kritik öneme sahiptir.

## Karar (Decision)

### 1. Modal Focus Trap (Odak Hapsi)
*   **Sorun:** Modal açıldığında, `Tab` tuşu ile modalın arkasındaki sayfa elemanlarına odaklanılabiliyordu. Bu durum ekran okuyucu kullanıcıları ve klavye gezintisi için kafa karıştırıcıdır.
*   **Çözüm:** Modal bileşeni aktifken, klavye odağının (focus) sadece modal içeriği (Kapat butonu, İçerik, Footer) arasında döngüsel olarak gezmesi sağlandı (`Tab` ve `Shift+Tab` dinlenerek).
*   **Uygulama:** `useEffect` hook'u ile `keydown` olayı dinlenir ve odak yönetimi manuel olarak hesaplanır.

### 2. Form Validasyon (Yalın Yaklaşım)
*   **Sorun:** HTML5 `required` özelliği modern ve tutarlı bir hata bildirimi için yetersiz kalabilir.
*   **Çözüm:** React state tabanlı "Custom Validation" kullanılmasına karar verildi.
*   **Uygulama:**
    *   Form gönderilmeden önce (`onSubmit`) bir `validate()` fonksiyonu çalışır.
    *   Hatalar `errors` state objesinde tutulur.
    *   Hata mesajları ilgili input alanının hemen altında, kırmızı ve belirgin bir şekilde gösterilir.
    *   `aria-invalid` ve `aria-describedby` nitelikleri ile hata durumu ekran okuyuculara bildirilir.

## Sonuçlar (Consequences)
*   **Pozitif:** Daha erişilebilir ve kullanıcı dostu bir deneyim sağlandı. Harici bir form kütüphanesi (Formik, RHF) kullanılmadan proje boyutunu büyütmeden çözüm üretildi.
*   **Negatif:** Manuel `keydown` ve validasyon yönetimi, kod karmaşıklığını hafifçe artırdı.
