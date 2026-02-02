### 🔢 Số học cơ bản
#### Chuyển xâu sang số (Cơ số)
```cpp
int cd(string s) {
  int t=0;
  while(s.length()>0) {
    int k=s[0]-48;
    t=t*10+k;
    s=s.erase(0,1);
  }
  return t;
}
```
#### Tổng chữ số
```cpp
int tcs(int n) {
  int t=0;
  while(n>0) { t+=n%10; n/=10; }
  return t;
}
```
#### Số lượng chữ số
```cpp
int slcs(int n) {
  int t=0;
  while(n>0) { t++; n/=10; }
  return t;
}
```
### ⚙️ Nhị phân & Hệ cơ số
#### Lấy xâu nhị phân
```cpp
string xnp(int n) {
  string s="";
  while(n>0) {
    char t=(char)(n%2 + '0');
    s=t+s; n=n/2;
  }
  return s;
}
```
#### Số thập phân từ xâu nhị phân
```cpp
int dtp(string s) {
  int k=0;
  for(int i=0;i<s.length();i++) {
    int n=s.length();
    k+=(s[i]-48)*pow(2,n-i-1);
  }
  return k;
}
```
### 🧬 Nguyên tố & Fibonacci
#### Sàng ước (Sieve Divisors)
```cpp
void sieve_div() {
  for (int i = 1; i <= N; i++) d[i] = 1; 
  for (int i = 2; i <= N; i++) {
    for (int j = i; j <= N; j += i)
      d[j]++;
  }
}
```
#### Kiểm tra nguyên tố
```cpp
int ktnt(int n) {
  if(n<2) return 0;
  for(int i=2;i*i<=n;i++) if(n%i==0) return 0;
  return 1;
}
```
#### Sàng nguyên tố (Sieve)
```cpp
void sieve() {
  memset(isPrime,true,sizeof(isPrime));
  isPrime[1]= isPrime[0] = false;
  for(long long i = 2; i * i <= nmax; ++i)
    if(isPrime[i])
      for(long long j = i * i; j <= nmax; j += i)
        isPrime[j] = false;
}
```
#### Hàm kiểm tra Fibonacci
```cpp
void fbnc(int n) {
  int a=1,b=1,m=1,i=1;
  while(a<=n) { i++; b=m; m=a; a+=b; }
  if(a-b==n) cout<<i<<endl;
  else cout<<"-1"<<endl;
}
```
#### Phân tích TSNT (Có mũ)
```cpp
int n; cin >> n; int dem;
for(int i = 2; i <= n; i++) {
  dem = 0;
  while(n % i == 0) { ++dem; n/=i; }
  if(dem) {
    cout<<i;
    if(dem>1) cout <<"^"<<dem;
    if(n>i) cout<<"*";
  }
}
```
#### Phân tích TSNT (Không mũ)
```cpp
void tsnt(int n) {
  int i=2, dem=0, a[100];
  while (n>1) {
    if (n%i==0) { n/=i; a[dem++]=i; }
    else i++;
  }
  if (dem == 0) a[dem++] = n;
  for (i=0;i<dem;i++) cout<<a[i]<<" ";
}
```
### 📐 Hình học & Toán
#### Khoảng cách 2 điểm
```cpp
double kc(int x1,int y1,int x2,int y2) {
  return sqrt(pow((x1-x2),2)+pow((y1-y2),2));
}
```
#### Diện tích tam giác (Heron)
```cpp
double dt(int x1,int y1,int x2,int y2,int x3,int y3) {
  int d1=kc(x1,y1,x2,y2);
  int d2=kc(x2,y3,x3,y3);
  int d3=kc(x1,y1,x3,y3);
  int k=(d1+d2+d3)/2;
  return sqrt(k*(k-d1)*(k-d2)*(k-d3));
}
```
#### Kiểm tra chính phương
```cpp
int ktcp(int n) {
  int x=(int)sqrt(n);
  return (x*x==n);
}
```
#### UCLN & BCNN
```cpp
int ucln(int m,int n) { if(n==0) return m; return ucln(n,(m%n)); }

int bcnn(int a,int b) { return a*b/ucln(a,b); }
```
#### Căn bậc hai (Tối ưu)
```cpp
void cb2(int n) {
  for(int i=sqrt(n);i>=1;i--)
  if(n%(i*i)==0) {
    cout<<i<<" "<<n/(i*i)<<endl;
    break;
  }
}
```
### 🧶 Xử lý Xâu & Mảng
#### Cộng 2 số siêu lớn
```cpp
string tong(string a,string b) {
  while(a.length()<b.length()) a='0'+a;
  while(a.length()>b.length()) b='0'+b;
  int nho=0; string kq;
  for(int i=a.length()-1;i>=0;--i) {
    int d=(a[i]-'0')+(b[i]-'0')+nho;
    nho=d/10; kq=(char)(d%10+'0')+kq;
  }
  if(nho) kq='1'+kq;
  return kq;
}
```
#### Số lần xuất hiện (Xâu)
```cpp
// Đoạn code sort và đếm
for(int i=0;i<=s.length()-2;i++)
  for(int j=i+1;j<=s.length()-1;j++)
    if(s[i] >= s[j]) swap(s[i], s[j]);
int dem = 1;
for(int i=0;i<=s.length()-1;i++)
  if(s[i] == s[i+1]) dem++;
  else { cout<<s[i]<<" "<<dem<<endl; dem = 1; }
```
#### Đếm kí tự (Fixed)
```cpp
void demslxh(string s) {
  sort(s.begin(),s.end());
  int d=0;
  for(int i=0;i<s.length();i++) {
    d++;
    if(s[i]!=s[i+1]) { cout<<s[i]<<" "<<d<<endl; d=0; }
  }
}
```
#### Nhập mảng vô hạn
```cpp
int a[1000], n=0, x;
while(cin>>x) { a[++n]=x; }
```
### 🛠️ Mẹo & Syntax
#### Mã ASCII Cần nhớ
```cpp
-48: Kí tự số -> Số
+32: Hoa -> Thường
'32': Dấu cách
'0'-'9': Kiểm tra số
'A'-'Z': Kiểm tra chữ
```
#### Sort các loại
```cpp
sort(a, a+n); // Tăng
sort(a, a+n, greater<int>()); // Giảm
sort(s.begin(), s.end()); // Xâu
```
#### Convert số -> xâu
```cpp
ostringstream convert;
convert << number;
string result = convert.str();
```
#### Memset & Vector
```cpp
memset(mang, gia_tri, sizeof mang);
vector<int> a(n, 0);
```
#### Static Cast
```cpp
int k=static_cast<char>(t);
char t=static_cast<int>(k);
```
#### Đỉnh hình chữ nhật M2C
```cpp
int kt(int i,int j,int h,int k) {
  if(a[i][j]+a[j][k]+a[h][k]+a[h][j]==s) return 1;
  return 0;
}
```
