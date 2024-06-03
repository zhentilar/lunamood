# Lunamood: Güneş Sisteminin Yakınındaki Ay Fazlarını Anlamak İçin Bir Web Uygulaması

Lunamood, güneş sisteminin yakınındaki ay fazlarını göstermek için bir web uygulamasıdır. Uygulama, kullanıcıların ay fazı hakkında daha fazla bilgi edinme ve anlaşılır bir şekilde görselleştirme imkanı sağlar. React kütüphanesini kullanarak geliştirilmiştir ve görsel olarak çok zengin ve anlaşılır bir şekilde ay fazları hakkında bilgi vermektedir.

## Nasıl Çalışır

Lunamood, ayın fazlarını temsil eden bir dizi veri kümesi kullanır. Bu veri kümesi, her fazın adını, resmini ve açıklamasını içerir. Uygulama, kullanıcının gezinmesini sağlayan bir denetim kullanıcı arabiriminde sunulur. Kullanıcı bir fazaya tıklarsa, uygulama o fazın resmini ve açıklamasını görüntüler.

Ayrıca, uygulama bir ilerleme çubuğu da sunar. Bu çubuk, kullanıcının gezinmesi sırasında mevcut fazın konumunu gösterir. Uygulama, bir carousel kullanarak farklı ay fazı resimlerini de sunar.

## Kullanım

Lunamood, bir tarayıcıda açılabilir. Uygulamanın ana sayfasında, kullanıcı ilk olarak gezinme denetimlerine rastlar. Buradan, kullanıcı istediği fazı seçebilir ve uygulama o fazın resmini ve açıklamasını görüntüler. Ayrıca, kullanıcı "Bilgiler" bağlantısına tıklarsa, ay fazlarıyla ilgili detaylı bilgi içeren görsel programlamayla oluşturulmuş bir diğer sayfaya ulaşır. Bu sayfadan ise fazlar hakkında bilgi alıp bu bilgileri değerlendirilir ve geri dönüş verilebilir.

## Kurulum

Lunamood, React kütüphanesini kullanarak geliştirilmiştir. React'i kullanmak için Node.js ve npm gereklidir. Node.js ve npm'yi yükledikten sonra, aşağıdaki komutları terminalde çalıştırabilirsiniz:


# Lunamood klonlamak için
```bash
git clone https://github.com/zhentilar/lunamood.git
```
# Dizine geçin
```bash
cd lunamood
```
# Bağımlılıkları yüklemek için
```bash
npm install
```
# Uygulamayı başlatmak için
```bash
npm start
```
Uygulama, varsayılan olarak http://localhost:3000 adresinde çalışacaktır.

Aynı zamanda uygulama yukarıdan verilen GitHub adresindeki dosyalarla eşzamanlı biçimde Netlify üzerinde "https://lunamood.netlify.app/" adresinde kullanıma açıktır.
