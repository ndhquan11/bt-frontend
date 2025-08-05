'use client'

import { useAuth } from '@/hooks/useAuth'
import { MainLayout } from '@/components/layout/MainLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { ROUTES } from '@/lib/constants'

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Chào mừng trở lại, {user?.name}!
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Đội nhóm của tôi</CardTitle>
              <CardDescription>
                Quản lý và tham gia các đội cầu lông
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">0</div>
              <p className="text-sm text-muted-foreground mb-4">
                Bạn chưa tham gia đội nào
              </p>
              <Link href={ROUTES.teams}>
                <Button>Xem đội nhóm</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Trận đấu sắp tới</CardTitle>
              <CardDescription>
                Các trận đấu bạn đã đăng ký
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">0</div>
              <p className="text-sm text-muted-foreground mb-4">
                Không có trận đấu nào sắp tới
              </p>
              <Link href={ROUTES.matches}>
                <Button>Tìm trận đấu</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tạo mới</CardTitle>
              <CardDescription>
                Tạo đội nhóm hoặc tổ chức trận đấu
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full" variant="outline">
                Tạo đội nhóm
              </Button>
              <Button className="w-full" variant="outline">
                Tổ chức trận đấu
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Hoạt động gần đây</CardTitle>
              <CardDescription>
                Các hoạt động mới nhất của bạn
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                Chưa có hoạt động nào
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}
