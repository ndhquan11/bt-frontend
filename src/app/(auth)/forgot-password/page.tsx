"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { useToast } from "@/components/ui/Toast"
import { ROUTES, VALIDATION } from "@/lib/constants"
import { apiClient } from "@/lib/api"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [error, setError] = useState("")

  const router = useRouter()
  const { showToast, ToastContainer } = useToast()

  const validateEmail = () => {
    if (!email) {
      setError("Email là bắt buộc")
      return false
    }
    if (!VALIDATION.email.pattern.test(email)) {
      setError("Email không hợp lệ")
      return false
    }
    setError("")
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateEmail()) {
      showToast({
        message: "Vui lòng nhập email hợp lệ",
        type: "warning"
      })
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // Call API to send reset password email
      await apiClient.post('/auth/forgot-password', {
        email: email.trim().toLowerCase()
      })

      setIsEmailSent(true)
      showToast({
        message: "Email khôi phục mật khẩu đã được gửi!",
        type: "success"
      })

    } catch (err) {
      let errorMessage = "Có lỗi xảy ra. Vui lòng thử lại."

      if (err instanceof Error) {
        if (err.message.includes('not found') || err.message.includes('User not found')) {
          errorMessage = "Email này không tồn tại trong hệ thống."
        } else {
          errorMessage = err.message
        }
      }

      setError(errorMessage)
      showToast({
        message: errorMessage,
        type: "error"
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendEmail = async () => {
    await handleSubmit(new Event('submit') as any)
  }

  if (isEmailSent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Kiểm tra email của bạn</h2>
            <p className="text-gray-600">Chúng tôi đã gửi link khôi phục mật khẩu đến email</p>
          </div>

          <Card className="backdrop-blur-sm bg-white/80">
            <CardHeader className="text-center">
              <CardTitle>Email đã được gửi</CardTitle>
              <CardDescription>
                Kiểm tra hộp thư của bạn và click vào link để đặt lại mật khẩu
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-green-50 border border-green-200 p-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-green-800">
                    Email khôi phục đã được gửi đến <strong>{email}</strong>
                  </p>
                </div>
              </div>

              <div className="text-sm text-gray-600 space-y-2">
                <p>• Kiểm tra cả thư mục spam/junk</p>
                <p>• Link sẽ hết hạn sau 15 phút</p>
                <p>• Nếu không nhận được email, bạn có thể gửi lại</p>
              </div>

              <div className="space-y-3">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={handleResendEmail}
                  disabled={isLoading}
                >
                  {isLoading ? "Đang gửi..." : "Gửi lại email"}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => router.push(ROUTES.login)}
                >
                  Quay lại đăng nhập
                </Button>
              </div>
            </CardContent>
          </Card>
          <ToastContainer />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m0 0a2 2 0 012 2m-2-2v6m0 0V9a2 2 0 00-2-2M9 7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V9a2 2 0 00-2-2H9z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Quên mật khẩu?</h2>
          <p className="text-gray-600">Nhập email để nhận link đặt lại mật khẩu</p>
        </div>

        <Card className="backdrop-blur-sm bg-white/80">
          <CardHeader className="text-center">
            <CardTitle>Khôi phục mật khẩu</CardTitle>
            <CardDescription>
              Chúng tôi sẽ gửi link khôi phục mật khẩu đến email của bạn
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="rounded-lg bg-red-50 border border-red-200 p-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm text-red-800">{error}</p>
                  </div>
                </div>
              )}

              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (error) setError("")
                }}
                required
                placeholder="your@email.com"
                disabled={isLoading}
                autoComplete="email"
              />

              <Button type="submit" className="w-full" disabled={isLoading || !email}>
                {isLoading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Đang gửi...
                  </div>
                ) : (
                  "Gửi email khôi phục"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Hoặc</span>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <Link
                  href={ROUTES.login}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium block"
                >
                  Quay lại đăng nhập
                </Link>
                <p className="text-sm text-gray-600">
                  Chưa có tài khoản?{" "}
                  <Link href={ROUTES.register} className="font-medium text-blue-600 hover:text-blue-700">
                    Đăng ký ngay
                  </Link>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <ToastContainer />
      </div>
    </div>
  )
}
