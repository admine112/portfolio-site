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
import { Camera, Plus, RefreshCw, Settings, FileText, Download, LogOut, Edit, Trash2, List } from "lucide-react"
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

  // Состояния для управления проектами
  const [projects, setProjects] = useState<any[]>([])
  const [isLoadingProjects, setIsLoadingProjects] = useState(false)
  const [editingProject, setEditingProject] = useState<any>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState("screenshots")

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

  const loadProjects = async () => {
    setIsLoadingProjects(true)
    try {
      const response = await fetch("/api/admin/projects")
      const data = await response.json()
      if (response.ok) {
        setProjects(data.projects)
      }
    } catch (error) {
      console.error('Error loading projects:', error)
    } finally {
      setIsLoadingProjects(false)
    }
  }

  const handleEditProject = (project: any) => {
    setEditingProject(project)
    setIsEditing(true)
    setNewProject({
      id: project.id,
      titleEn: project.title.en,
      titleUk: project.title.uk,
      titleDe: project.title.de,
      descriptionEn: project.description.en,
      descriptionUk: project.description.uk,
      descriptionDe: project.description.de,
      type:
        project.type.en === "Landing Page"
          ? "landing"
          : project.type.en === "E-commerce"
            ? "ecommerce"
            : "webapp",
      technologies: project.technologies.join(', '),
      featuresEn: project.features.en.join(', '),
      featuresUk: project.features.uk.join(', '),
      featuresDe: project.features.de.join(', '),
      price: project.price,
      durationEn: project.duration.en,
      durationUk: project.duration.uk,
      durationDe: project.duration.de,
      url: project.url,
      image: project.image,
    })
    // Переключаемся на вкладку "Добавить" для редактирования
    setActiveTab("projects")
  }

  const handleSaveProject = async () => {
    if (!newProject.id || !newProject.titleUk || !newProject.url) {
      setProjectStatus("❌ Заполните обязательные поля: ID, Название (UA), URL")
      return
    }

    setProjectStatus(isEditing ? "⏳ Сохранение изменений..." : "⏳ Добавление проекта...")

    try {
      const url = isEditing ? "/api/admin/edit-project" : "/api/admin/add-project"
      const method = isEditing ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject),
      })

      const data = await response.json()

      if (response.ok) {
        setProjectStatus(`✅ ${data.message}`)
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
        setIsEditing(false)
        setEditingProject(null)
        loadProjects()
      } else {
        setProjectStatus(`❌ ${data.error}`)
      }
    } catch (error) {
      setProjectStatus("❌ Ошибка при сохранении проекта")
    }
  }

  const handleDeleteProject = async (id: string) => {
    if (!confirm('Вы уверены, что хотите удалить этот проект?')) return

    setProjectStatus("⏳ Удаление проекта...")

    try {
      const response = await fetch("/api/admin/delete-project", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      })

      const data = await response.json()

      if (response.ok) {
        setProjectStatus(`✅ ${data.message}`)
        loadProjects()
      } else {
        setProjectStatus(`❌ ${data.error}`)
      }
    } catch (error) {
      setProjectStatus("❌ Ошибка при удалении проекта")
    }
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    setEditingProject(null)
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

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="screenshots">
              <Camera className="mr-2 h-4 w-4" />
              Скриншоты
            </TabsTrigger>
            <TabsTrigger value="projects">
              <Plus className="mr-2 h-4 w-4" />
              Добавить
            </TabsTrigger>
            <TabsTrigger value="manage" onClick={loadProjects}>
              <List className="mr-2 h-4 w-4" />
              Управление
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

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="features-en">Функции (EN)</Label>
                        <Textarea
                          id="features-en"
                          placeholder="Feature 1, Feature 2, Feature 3 (comma separated)"
                          value={newProject.featuresEn}
                          onChange={(e) => setNewProject({...newProject, featuresEn: e.target.value})}
                          rows={2}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="features-de">Функции (DE)</Label>
                        <Textarea
                          id="features-de"
                          placeholder="Funktion 1, Funktion 2, Funktion 3 (durch Komma getrennt)"
                          value={newProject.featuresDe}
                          onChange={(e) => setNewProject({...newProject, featuresDe: e.target.value})}
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Длительность */}
                  <div className="space-y-4 border-t pt-4">
                    <h3 className="text-lg font-semibold">Длительность разработки</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="duration-uk">Українська</Label>
                      <Input
                        id="duration-uk"
                        placeholder="1-2 дні"
                        value={newProject.durationUk}
                        onChange={(e) => setNewProject({...newProject, durationUk: e.target.value})}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="duration-en">English</Label>
                        <Input
                          id="duration-en"
                          placeholder="1-2 days"
                          value={newProject.durationEn}
                          onChange={(e) => setNewProject({...newProject, durationEn: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="duration-de">Deutsch</Label>
                        <Input
                          id="duration-de"
                          placeholder="1-2 Tage"
                          value={newProject.durationDe}
                          onChange={(e) => setNewProject({...newProject, durationDe: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Кнопка добавления/редактирования */}
                  <div className="flex gap-2">
                    <Button onClick={handleSaveProject} className="flex-1" size="lg">
                      {isEditing ? (
                        <>
                          <Edit className="mr-2 h-4 w-4" />
                          Сохранить изменения
                        </>
                      ) : (
                        <>
                          <Plus className="mr-2 h-4 w-4" />
                          Добавить проект
                        </>
                      )}
                    </Button>
                    {isEditing && (
                      <Button onClick={handleCancelEdit} variant="outline" size="lg">
                        Отмена
                      </Button>
                    )}
                  </div>

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

          {/* Управление проектами */}
          <TabsContent value="manage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Управление проектами</CardTitle>
                <CardDescription>
                  Редактирование и удаление существующих проектов ({projects.length})
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoadingProjects ? (
                  <div className="text-center py-8">
                    <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-2" />
                    <p className="text-muted-foreground">Загрузка проектов...</p>
                  </div>
                ) : projects.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Проекты не найдены</p>
                    <Button onClick={loadProjects} variant="outline" className="mt-4">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Обновить
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {projects.map((project) => (
                      <div
                        key={project.id}
                        className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex-shrink-0 w-32 h-20 rounded overflow-hidden border">
                          <img
                            src={project.image}
                            alt={project.title.uk}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold truncate">{project.title.uk}</h3>
                          <p className="text-sm text-muted-foreground truncate">{project.url}</p>
                          <div className="flex gap-2 mt-1">
                            <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                              {project.type.uk}
                            </span>
                            <span className="text-xs px-2 py-1 rounded bg-muted">
                              ID: {project.id}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button onClick={() => handleEditProject(project)} variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button onClick={() => handleDeleteProject(project.id)} variant="destructive" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Статус */}
                {projectStatus && (
                  <div className="p-4 rounded-lg bg-muted mt-4">
                    <p className="text-sm">{projectStatus}</p>
                  </div>
                )}
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
