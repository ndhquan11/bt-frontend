import Link from "next/link"
import { MainLayout } from "@/components/layout/MainLayout"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { ROUTES } from "@/lib/constants"

export default function Home() {
  return (
    <MainLayout>
      <div className="relative">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                  🏸 Cộng đồng cầu lông hàng đầu Việt Nam
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Kết nối cộng đồng <span className="gradient-text">Cầu lông</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Tham gia và tổ chức các đội cầu lông, tìm kiếm trận đấu và kết nối với những người có cùng đam mê
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href={ROUTES.register}>
                  <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-4 h-14">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                    Bắt đầu ngay
                  </Button>
                </Link>
                <Link href={ROUTES.teams}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto text-lg px-8 py-4 h-14 bg-transparent"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Khám phá đội nhóm
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Thành viên</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-gray-600">Đội nhóm</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
                  <div className="text-gray-600">Trận đấu</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Tính năng nổi bật</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tất cả những gì bạn cần để tổ chức và tham gia hoạt động cầu lông một cách dễ dàng và hiệu quả
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl">Tạo đội nhóm</CardTitle>
                  <CardDescription className="text-lg">Tạo và quản lý đội cầu lông của riêng bạn</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Mời bạn bè, quản lý thành viên và tổ chức các hoạt động cho đội một cách dễ dàng và chuyên nghiệp
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl">Tìm trận đấu</CardTitle>
                  <CardDescription className="text-lg">Khám phá và tham gia các trận đấu gần bạn</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Tìm kiếm trận đấu theo địa điểm, thời gian và trình độ phù hợp với bạn
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5zM15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl">Kết nối cộng đồng</CardTitle>
                  <CardDescription className="text-lg">Gặp gỡ những người chơi cầu lông khác</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Mở rộng mạng lưới và giao lưu với cộng đồng cầu lông trên toàn quốc
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
          <div className="relative container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Sẵn sàng bắt đầu?</h2>
              <p className="text-xl mb-10 opacity-90 leading-relaxed">
                Tham gia cộng đồng cầu lông ngay hôm nay và khám phá những trải nghiệm tuyệt vời cùng với hàng nghìn
                người chơi khác
              </p>
              <Link href={ROUTES.register}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-4 h-14 bg-white text-blue-600 hover:bg-gray-100"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                  Đăng ký miễn phí
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
