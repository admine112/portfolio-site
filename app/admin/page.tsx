"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Camera, Plus, RefreshCw, Settings, FileText, Download, LogOut } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [screenshotUrl, setScreenshotUrl] = useState("")
  const [screenshotFilename, setScreenshotFilename] = useState("")
  const [screenshotStatus, setScreenshotStatus] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  // Состояния для нового проекта
  const [newProject, setNewProject] = useState({
    id: "",
    titleEn: "",
    titleUk: "",
    titleDe: "",
    descriptionEn: "",
    descriptionUk: "",
    descriptionDe: "",
    type: "landing",
    technologies: "",
    featuresEn: "",
    featuresUk: "",
    featuresDe: "",
    price: "",
    durationEn: "",
    durationUk: "",
    durationDe: "",
    url: "",
    image: "",
  })
  const [projectStatus, setProjectStatus] = useState("")
  const [uploadedImage, setUploadedImage] = useState("")
  const [isUploading, setIsUploading] = useState(false)

  // Проверка авторизации
  useEffect(() => {
    const token = localStorage.getItem("admin_token")
    if (!token) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("admin_token")
    router.push("/admin/login")
  }

  if (!isAuthenticated) {
    return <div className="flex min-h-screen items-center justify-center">Загрузка...</div>
  }

  const handleGenerateScreenshot = async () => {
    if (!screenshotUrl || !screenshotFilename) {
      setScreenshotStatus("❌ Заполните все поля")
      return
    }

    setIsGenerating(true)
    setScreenshotStatus("⏳ Создание скриншота...")

    try {
      const response = await fetch("/api/admin/screenshot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: screenshotUrl, filename: screenshotFilename }),
      })

      const data = await response.json()

      if (response.ok) {
        setScreenshotStatus(`✅ ${data.message}`)
        setScreenshotUrl("")
        setScreenshotFilename("")
      } else {
        setScreenshotStatus(`❌ ${data.error}`)
      }
    } catch (error) {
      setScreenshotStatus("❌ Ошибка при создании скриншота")
    } finally {
      setIsGenerating(false)
    }
  }

  const handleGenerateAllScreenshots = async () => {
    setIsGenerating(true)
    setScreenshotStatus("⏳ Создание всех скриншотов... Это займет несколько минут")

    try {
      const response = await fetch("/api/admin/screenshot-all", {
        method: "POST",
      })

      const data = await response.json()

      if (response.ok) {
        setScreenshotStatus(`✅ ${data.message}`)
      } else {
        setScreenshotStatus(`❌ ${data.error}`)
      }
    } catch (error) {
      setScreenshotStatus("❌ Ошибка при создании скриншотов")
    } finally {
      setIsGenerating(false)
    }
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    setProjectStatus("⏳ Загрузка файла...")

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (response.ok) {
        setUploadedImage(data.filename)
        setNewProject({...newProject, image: data.filename})
        setProjectStatus(`✅ Файл загружен: ${data.filename}`)
      } else {
        setProjectStatus(`❌ ${data.error}`)
      }
    } catch (error) {
      setProjectStatus("❌ Ошибка при загрузке файла")
    } finally {
      setIsUploading(false)
    }
  }

  const handleAddProject = async () => {
    if (!newProject.id || !newProject.titleUk || !newProject.url) {
      setProjectStatus("❌ Заполните обязательные поля: ID, Название (UA), URL")
      return
    }

    setProjectStatus("⏳ Добавление проекта...")

    try {
      const response = await fetch("/api/admin/add-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject),
      })

      const data = await response.json()

      if (response.ok) {
        setProjectStatus(`✅ ${data.message}`)
        // Очищаем форму
        setNewProject({
          id: "",
          titleEn: "",
          titleUk: "",
          titleDe: "",
          descriptionEn: "",
          descriptionUk: "",
          descriptionDe: "",
          type: "landing",
          technologies: "",
          featuresEn: "",
          featuresUk: "",
          featuresDe: "",
          price: "",
          durationEn: "",
          durationUk: "",
          durationDe: "",
          url: "",
          image: "",
        })
      } else {
        setProjectStatus(`❌ ${data.error}`)
      }
    } catch (error) {
      setProjectStatus("❌ Ошибка при добавлении проекта")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Панель администратора</h1>
              <p className="text-muted-foreground">
                Управление проектами, генерация скриншотов и настройки
              </p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Выход
            </Button>
          </div>

          <Tabs defaultValue="screenshots" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="screenshots">
                <Camera className="mr-2 h-4 w-4" />
                Скриншоты
              </TabsTrigger>
              <TabsTrigger value="projects">
                <Plus className="mr-2 h-4 w-4" />
                Проекты
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="mr-2 h-4 w-4" />
                Настройки
              </TabsTrigger>
              <TabsTrigger value="docs">
                <FileText className="mr-2 h-4 w-4" />
                Документация
              </TabsTrigger>
            </TabsList>

            {/* Скриншоты */}
            <TabsContent value="screenshots" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Генерация скриншотов</CardTitle>
                  <CardDescription>
                    Создайте превью для проектов автоматически
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Один скриншот */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Создать один скриншот</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="url">URL сайта</Label>
                      <Input
                        id="url"
                        placeholder="https://example.com"
                        value={screenshotUrl}
                        onChange={(e) => setScreenshotUrl(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="filename">Имя файла</Label>
                      <Input
                        id="filename"
                        placeholder="project-preview.jpg"
                        value={screenshotFilename}
                        onChange={(e) => setScreenshotFilename(e.target.value)}
                      />
                      <p className="text-sm text-muted-foreground">
                        Файл будет сохранен в /public
                      </p>
                    </div>

                    <Button
                      onClick={handleGenerateScreenshot}
                      disabled={isGenerating}
                      className="w-full"
                    >
                      <Camera className="mr-2 h-4 w-4" />
                      {isGenerating ? "Создание..." : "Создать скриншот"}
                    </Button>
                  </div>

                  {/* Все скриншоты */}
                  <div className="border-t pt-6 space-y-4">
                    <h3 className="text-lg font-semibold">Обновить все скриншоты</h3>
                    <p className="text-sm text-muted-foreground">
                      Создаст скриншоты для всех проектов. Займет 5-10 минут.
                    </p>
                    
                    <Button
                      onClick={handleGenerateAllScreenshots}
                      disabled={isGenerating}
                      variant="secondary"
                      className="w-full"
                    >
                      <RefreshCw className="mr-2 h-4 w-4" />
                      {isGenerating ? "Создание..." : "Обновить все скриншоты"}
                    </Button>
                  </div>

                  {/* Статус */}
                  {screenshotStatus && (
                    <div className="p-4 rounded-lg bg-muted">
                      <p className="text-sm">{screenshotStatus}</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Список существующих скриншотов */}
              <Card>
                <CardHeader>
                  <CardTitle>Существующие скриншоты</CardTitle>
                  <CardDescription>
                    Превью в папке /public
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "barbershop-preview.jpg",
                      "supplement-preview.jpg",
                      "conference-preview.jpg",
                      "flower-shop-preview.jpg",
                      "yoga-studio-preview.jpg",
                      "pizzeria-preview.jpg",
                      "notary-preview.jpg",
                      "coffee-shop-preview.jpg",
                      "driving-school-preview.jpg",
                      "car-security-preview.jpg",
                      "tire-service-preview.jpg",
                    ].map((filename) => (
                      <div key={filename} className="space-y-2">
                        <div className="aspect-video rounded-lg overflow-hidden border">
                          <img
                            src={`/${filename}`}
                            alt={filename}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground truncate">
                          {filename}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Проекты */}
            <TabsContent value="projects" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Добавить новый проект</CardTitle>
                  <CardDescription>
                    Заполните форму для добавления проекта в портфолио
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Основная информация */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Основная информация</h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="project-id">ID проекта *</Label>
                          <Input
                            id="project-id"
                            placeholder="my-project"
                            value={newProject.id}
                            onChange={(e) => setNewProject({...newProject, id: e.target.value})}
                          />
                          <p className="text-xs text-muted-foreground">Латиница, без пробелов</p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="project-url">URL сайта *</Label>
                          <Input
                            id="project-url"
                            placeholder="https://example.com"
                            value={newProject.url}
                            onChange={(e) => setNewProject({...newProject, url: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="project-type">Тип проекта</Label>
                        <Select
                          value={newProject.type}
                          onValueChange={(value) => setNewProject({...newProject, type: value})}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="landing">Landing Page / Лендінг</SelectItem>
                            <SelectItem value="ecommerce">E-commerce / Інтернет-магазин</SelectItem>
                            <SelectItem value="webapp">Web Application / Веб-додаток</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Названия */}
                    <div className="space-y-4 border-t pt-4">
                      <h3 className="text-lg font-semibold">Название проекта</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="title-uk">Українська *</Label>
                        <Input
                          id="title-uk"
                          placeholder="Назва проєкту"
                          value={newProject.titleUk}
                          onChange={(e) => setNewProject({...newProject, titleUk: e.target.value})}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="title-en">English</Label>
                          <Input
                            id="title-en"
                            placeholder="Project Title"
                            value={newProject.titleEn}
                            onChange={(e) => setNewProject({...newProject, titleEn: e.target.value})}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="title-de">Deutsch</Label>
                          <Input
                            id="title-de"
                            placeholder="Projekttitel"
                            value={newProject.titleDe}
                            onChange={(e) => setNewProject({...newProject, titleDe: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Описания */}
                    <div className="space-y-4 border-t pt-4">
                      <h3 className="text-lg font-semibold">Описание проекта</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="desc-uk">Українська</Label>
                        <Textarea
                          id="desc-uk"
                          placeholder="Опис проєкту"
                          value={newProject.descriptionUk}
                          onChange={(e) => setNewProject({...newProject, descriptionUk: e.target.value})}
                          rows={3}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="desc-en">English</Label>
                          <Textarea
                            id="desc-en"
                            placeholder="Project description"
                            value={newProject.descriptionEn}
                            onChange={(e) => setNewProject({...newProject, descriptionEn: e.target.value})}
                            rows={3}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="desc-de">Deutsch</Label>
                          <Textarea
                            id="desc-de"
                            placeholder="Projektbeschreibung"
                            value={newProject.descriptionDe}
                            onChange={(e) => setNewProject({...newProject, descriptionDe: e.target.value})}
                            rows={3}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Технологии и функции */}
                    <div className="space-y-4 border-t pt-4">
                      <h3 className="text-lg font-semibold">Детали</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="technologies">Технологии</Label>
                        <Input
                          id="technologies"
                          placeholder="React, Next.js, Tailwind CSS (через запятую)"
                          value={newProject.technologies}
                          onChange={(e) => setNewProject({...newProject, technologies: e.target.value})}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="price">Цена</Label>
                          <Input
                            id="price"
                            placeholder="$100-150"
                            value={newProject.price}
                            onChange={(e) => setNewProject({...newProject, price: e.target.value})}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="image">Скриншот</Label>
                          <div className="flex gap-2">
                            <Input
                              id="image"
                              placeholder="/project-preview.jpg"
                              value={newProject.image}
                              onChange={(e) => setNewProject({...newProject, image: e.target.value})}
                            />
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => document.getElementById('file-upload')?.click()}
                              disabled={isUploading}
                            >
                              {isUploading ? "..." : "Загрузить"}
                            </Button>
                          </div>
                          <input
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileUpload}
                          />
                          {uploadedImage && (
                            <div className="mt-2">
                              <img
                                src={uploadedImage}
                                alt="Preview"
                                className="w-32 h-20 object-cover rounded border"
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="features-uk">Функции (UA)</Label>
                        <Textarea
                          id="features-uk"
                          placeholder="Функція 1, Функція 2, Функція 3 (через запятую)"
                          value={newProject.featuresUk}
                          onChange={(e) => setNewProject({...newProject, featuresUk: e.target.value})}
                          rows={2}
                        />
                      </div>
                    </div>

                    {/* Кнопка добавления */}
                    <Button onClick={handleAddProject} className="w-full" size="lg">
                      <Plus className="mr-2 h-4 w-4" />
                      Добавить проект
                    </Button>

                    {/* Статус */}
                    {projectStatus && (
                      <div className="p-4 rounded-lg bg-muted">
                        <p className="text-sm">{projectStatus}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Настройки */}
            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Настройки Telegram бота</CardTitle>
                  <CardDescription>
                    Конфигурация уведомлений
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Telegram Bot Token</Label>
                      <Input type="password" placeholder="Настроено в .env.local" disabled />
                    </div>
                    <div className="space-y-2">
                      <Label>Chat ID</Label>
                      <Input type="password" placeholder="Настроено в .env.local" disabled />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Для изменения отредактируйте файл .env.local
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Документация */}
            <TabsContent value="docs" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Документация</CardTitle>
                  <CardDescription>
                    Инструкции по использованию
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">📸 Создание скриншотов</h3>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Перейдите на вкладку "Скриншоты"</li>
                        <li>Введите URL сайта и имя файла</li>
                        <li>Нажмите "Создать скриншот"</li>
                        <li>Файл сохранится в /public</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">➕ Добавление проекта</h3>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Создайте скриншот проекта</li>
                        <li>Откройте lib/projects-data.ts</li>
                        <li>Добавьте новый объект в массив projects</li>
                        <li>Укажите image: "/ваш-файл-preview.jpg"</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">🔄 Обновление всех превью</h3>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Нажмите "Обновить все скриншоты"</li>
                        <li>Подождите 5-10 минут</li>
                        <li>Обновите страницу проектов</li>
                      </ol>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="font-semibold mb-2">📚 Полная документация</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• QUICK_START.md - Быстрый старт</li>
                        <li>• HOW_TO_GENERATE_SCREENSHOTS.md - Генерация скриншотов</li>
                        <li>• TELEGRAM_BOT_SETUP.md - Настройка бота</li>
                        <li>• CHANGES_SUMMARY.md - Список изменений</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
