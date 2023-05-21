# Airbnb Clone

Bu proje, popüler bir seyahat ve konaklama platformu olan Airbnb'nin basit bir klonunu oluşturmayı amaçlamaktadır. Kullanıcılar, konaklama birimlerini listeleyebilir, rezervasyon yapabilir, ev sahipleri olarak kayıt olabilir ve kendi konaklama birimlerini listeleme imkanına sahip olacaktır.

## Özellikler

- Kullanıcılar, hesap oluşturabilir, oturum açabilir ve oturumu kapatabilir.
- Ev sahipleri, kendi konaklama birimlerini listelemek için hesap oluşturabilir ve oturum açabilir.
- Kullanıcılar, mevcut konaklama birimlerini tarayabilir ve arama kriterlerine göre filtreleyebilir.
- Kullanıcılar, konaklama birimlerine göz atabilir, ayrıntılarını görüntüleyebilir ve rezervasyon yapabilir.
- Kullanıcılar, rezervasyonlarını yönetebilir, rezervasyonları iptal edebilir ve geçmiş rezervasyonlarını görüntüleyebilir.
- Ev sahipleri, kendi konaklama birimlerini yönetebilir, rezervasyon taleplerini onaylayabilir veya reddedebilir.
- Kullanıcılar, kullanıcı profillerini düzenleyebilir, profil fotoğrafı ekleyebilir ve diğer kullanıcıların profillerini görüntüleyebilir.
- Kullanıcılar, konaklama birimlerine yorum yapabilir ve yorumları görüntüleyebilir.

## Kurulum

1. Bu deposu yerel makinenize klonlayın:

   ```bash
   git clone https://github.com/ahmetpalavan/airbnb_clone.git
   ```

2. Proje dizinine gidin:

   ```bash
   cd airbnb_clone
   ```

3. Gerekli bağımlılıkları yüklemek için aşağıdaki komutu çalıştırın:

   ```bash
   npm install
   ```

4. Veritabanını oluşturmak için aşağıdaki komutu çalıştırın:

   ```bash
   npm run migrate
   ```

5. Sunucuyu başlatmak için aşağıdaki komutu çalıştırın:

   ```bash
   npm run start
   ```
