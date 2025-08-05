'use client'

import { MainLayout } from '@/components/layout/MainLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function MatchesPage() {
  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Trận đấu</h1>
            <p className="text-muted-foreground">
              Tìm kiếm và tham gia các trận đấu cầu lông
            </p>
          </div>
          <Button>
            Tổ chức trận đấu
          </Button>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Giao hữu cuối tuần - Sân ABC</CardTitle>
                  <CardDescription>
                    Chủ nhật, 15/12/2024 • 08:00 - 10:00
                  </CardDescription>
                </div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Còn chỗ
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium">Địa điểm</p>
                  <p className="text-sm text-muted-foreground">
                    Sân cầu lông ABC, Quận 1, TP.HCM
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Số người</p>
                  <p className="text-sm text-muted-foreground">
                    6/8 người
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Trình độ</p>
                  <p className="text-sm text-muted-foreground">
                    Trung bình
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Buổi giao hữu cầu lông cuối tuần dành cho các bạn có trình độ trung bình.
                Chi phí sân sẽ được chia đều cho tất cả người tham gia.
              </p>
              <div className="flex gap-2">
                <Button variant="outline">
                  Xem chi tiết
                </Button>
                <Button>
                  Tham gia (50k)
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Giải đấu câu lạc bộ - Tháng 12</CardTitle>
                  <CardDescription>
                    Thứ 7, 21/12/2024 • 14:00 - 18:00
                  </CardDescription>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  Giải đấu
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium">Địa điểm</p>
                  <p className="text-sm text-muted-foreground">
                    Nhà thi đấu XYZ, Quận 3, TP.HCM
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Số người</p>
                  <p className="text-sm text-muted-foreground">
                    24/32 người
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Trình độ</p>
                  <p className="text-sm text-muted-foreground">
                    Trung bình - Cao
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Giải đấu cầu lông dành cho các thành viên câu lạc bộ.
                Giải thưởng hấp dẫn cho các vị trí cao nhất.
              </p>
              <div className="flex gap-2">
                <Button variant="outline">
                  Xem chi tiết
                </Button>
                <Button>
                  Đăng ký (100k)
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Tập luyện buổi tối</CardTitle>
                  <CardDescription>
                    Thứ 3, 17/12/2024 • 19:00 - 21:00
                  </CardDescription>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                  Sắp đầy
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium">Địa điểm</p>
                  <p className="text-sm text-muted-foreground">
                    Sân DEF, Quận 7, TP.HCM
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Số người</p>
                  <p className="text-sm text-muted-foreground">
                    7/8 người
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Trình độ</p>
                  <p className="text-sm text-muted-foreground">
                    Mới bắt đầu
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Buổi tập luyện dành cho người mới bắt đầu chơi cầu lông.
                Có huấn luyện viên hướng dẫn cơ bản.
              </p>
              <div className="flex gap-2">
                <Button variant="outline">
                  Xem chi tiết
                </Button>
                <Button>
                  Tham gia (80k)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-lg mx-auto">
            <CardHeader>
              <CardTitle>Muốn tổ chức trận đấu?</CardTitle>
              <CardDescription>
                Tạo sự kiện của riêng bạn và mời người khác tham gia
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Tổ chức trận đấu mới
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}
