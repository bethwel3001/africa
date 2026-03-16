
"use client"

import * as React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { generateConferenceContent, type GenerateConferenceContentInput } from "@/ai/flows/conference-content-generator-flow"
import { Sparkles, Copy, RefreshCcw, Loader2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function ContentGeneratorPage() {
  const [loading, setLoading] = React.useState(false)
  const [result, setResult] = React.useState("")
  const [formData, setFormData] = React.useState<GenerateConferenceContentInput>({
    conferenceName: 'INTERNATIONAL PAN-AFRICAN YOUTH CONFERENCE',
    conferenceDates: '21st – 23rd October 2026',
    conferenceTheme: 'Pan-African Youth for a Just, Inclusive & Sustainable Africa',
    targetAudience: 'Students',
    contentType: 'Social Media Post',
    language: 'English',
    additionalContext: ''
  })

  const handleGenerate = async () => {
    setLoading(true)
    try {
      const output = await generateConferenceContent(formData)
      setResult(output.generatedContent)
    } catch (error) {
      toast({
        title: "Error generating content",
        description: "Please try again later.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(result)
    toast({
      title: "Copied!",
      description: "Content copied to clipboard."
    })
  }

  return (
    <main className="min-h-screen bg-muted/20">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Sparkles className="text-secondary" /> 
              Promotional Content Tool
            </h1>
            <p className="text-muted-foreground">
              Internal tool for AUSP organizers to generate tailored messages for social media, newsletters, and more.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="md:col-span-1 border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Config</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Target Audience</Label>
                  <Select 
                    value={formData.targetAudience} 
                    onValueChange={(v: any) => setFormData({...formData, targetAudience: v})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Students">Students</SelectItem>
                      <SelectItem value="Entrepreneurs">Entrepreneurs</SelectItem>
                      <SelectItem value="Policymakers">Policymakers</SelectItem>
                      <SelectItem value="Partners">Partners</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Content Type</Label>
                  <Select 
                    value={formData.contentType} 
                    onValueChange={(v: any) => setFormData({...formData, contentType: v})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Social Media Post">Social Media Post</SelectItem>
                      <SelectItem value="Event Description">Event Description</SelectItem>
                      <SelectItem value="Website Headline">Website Headline</SelectItem>
                      <SelectItem value="Newsletter Excerpt">Newsletter Excerpt</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Language</Label>
                  <Select 
                    value={formData.language} 
                    onValueChange={(v: any) => setFormData({...formData, language: v})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="French">French</SelectItem>
                      <SelectItem value="Arabic">Arabic</SelectItem>
                      <SelectItem value="Swahili">Swahili</SelectItem>
                      <SelectItem value="Portuguese">Portuguese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Context (Optional)</Label>
                  <Textarea 
                    placeholder="E.g. focus on seed funding for youth challenge" 
                    value={formData.additionalContext}
                    onChange={(e) => setFormData({...formData, additionalContext: e.target.value})}
                  />
                </div>

                <Button 
                  className="w-full bg-primary text-white font-bold" 
                  onClick={handleGenerate}
                  disabled={loading}
                >
                  {loading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2 h-4 w-4" />}
                  Generate Draft
                </Button>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 border-none shadow-md bg-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <CardTitle className="text-lg">Generated Content</CardTitle>
                  <CardDescription>AI-generated draft based on conference parameters.</CardDescription>
                </div>
                {result && (
                  <Button variant="ghost" size="icon" onClick={handleCopy}>
                    <Copy className="h-4 w-4" />
                  </Button>
                )}
              </CardHeader>
              <CardContent>
                <div className="min-h-[300px] p-6 rounded-xl bg-muted/30 border border-dashed flex flex-col">
                  {loading ? (
                    <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                       <Loader2 className="h-10 w-10 text-primary animate-spin" />
                       <p className="text-sm text-muted-foreground">Drafting Pan-African inspiration...</p>
                    </div>
                  ) : result ? (
                    <div className="prose prose-sm max-w-none whitespace-pre-wrap leading-relaxed">
                      {result}
                    </div>
                  ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-center opacity-40">
                       <Sparkles className="h-12 w-12 mb-4" />
                       <p>Select parameters and click generate to start.</p>
                    </div>
                  )}
                </div>
              </CardContent>
              {result && (
                <CardFooter className="flex justify-end">
                   <Button variant="outline" size="sm" onClick={handleGenerate}>
                     <RefreshCcw className="h-3 w-3 mr-2" /> Regenerate
                   </Button>
                </CardFooter>
              )}
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
