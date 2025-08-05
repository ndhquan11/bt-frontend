'use client'

import { MainLayout } from '@/components/layout/MainLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function TeamsPage() {
  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Đội nhóm</h1>
            <p className="text-muted-foreground">
              Khám phá và tham gia các đội cầu lông
            </p>
          </div>
          <Button>
            Tạo đội mới
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Đội Cầu Lông Sài Gòn</CardTitle>
              <CardDescription>
                15 thành viên • Hoạt động hàng tuần
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Đội cầu lông dành cho các bạn yêu thích môn thể thao này tại khu vực TP.HCM.
                Chúng tôi tổ chức các buổi tập và giao hữu thường xuyên.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Xem chi tiết
                </Button>
                <Button size="sm">
                  Tham gia
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Badminton Lovers</CardTitle>
              <CardDescription>
                8 thành viên • Mới thành lập
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Nhóm cầu lông mới thành lập, chào đón tất cả mọi người từ người mới
                bắt đầu đến người có kinh nghiệm.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Xem chi tiết
                </Button>
                <Button size="sm">
                  Tham gia
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cầu Lông Hà Nội</CardTitle>
              <CardDescription>
                22 thành viên • Chuyên nghiệp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Đội cầu lông dành cho những người có trình độ cao, thường xuyên
                tham gia các giải đấu địa phương.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Xem chi tiết
                </Button>
                <Button size="sm">
                  Tham gia
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-lg mx-auto">
            <CardHeader>
              <CardTitle>Không tìm thấy đội phù hợp?</CardTitle>
              <CardDescription>
                Tạo đội nhóm của riêng bạn và mời bạn bè tham gia
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Tạo đội mới
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}
