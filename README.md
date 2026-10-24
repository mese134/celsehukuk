# Celse – Android uygulaması

Türk hukuku duruşma oyunu Celse'nin Play Store sürümü. Paket adı: `com.celsehukuk`.

## Yapı
- `src/` – oyunun kaynağı (arayüz `app.html`, sorular `data*.js`, yasal metinler `legal.js`)
- `tools/build.py` – `www/` (uygulama) ve `site/` (web + yasal sayfa) çıktılarını üretir
- `android/` – Capacitor 8 Android projesi (hedef API 36)
- `store/` – Play Store simgesi, kapak görseli ve ekran görüntüleri
- `.github/workflows/android.yml` – her `main` güncellemesinde imzalı `.aab` ve test `.apk` derler

## Derleme
GitHub'da **Settings → Secrets and variables → Actions** altına dört gizli değer ekleyin:
`CELSE_KEYSTORE_B64`, `CELSE_KEYSTORE_PASSWORD`, `CELSE_KEY_ALIAS`, `CELSE_KEY_PASSWORD`.
Sonra **Actions → Android derleme → Run workflow**. Bittiğinde `celse-release` dosyasını indirin.

## Yeni sürüm
1. `src/` içinde değişikliği yapın.
2. `android/app/build.gradle` içinde `versionCode` değerini bir artırın, `versionName`'i güncelleyin.
3. `main` dalına gönderin; derlenen `.aab` dosyasını Play Console'a yükleyin.

Yükleme anahtarı (`.jks`) depoya eklenmez. Kaybederseniz Play Console üzerinden yükleme anahtarı sıfırlama talebinde bulunulabilir.
