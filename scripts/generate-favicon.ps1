Add-Type -AssemblyName System.Drawing

$size = 32
$bmp = New-Object System.Drawing.Bitmap $size, $size
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Gradient
$rect = New-Object System.Drawing.Rectangle 0, 0, $size, $size
$color1 = [System.Drawing.Color]::FromArgb(255, 79, 70, 229)
$color2 = [System.Drawing.Color]::FromArgb(255, 6, 182, 212)
$brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush $rect, $color1, $color2, 45.0

# Rounded rect
$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$radius = 7
$d = $radius * 2
$path.AddArc(0, 0, $d, $d, 180, 90)
$path.AddArc($size - $d, 0, $d, $d, 270, 90)
$path.AddArc($size - $d, $size - $d, $d, $d, 0, 90)
$path.AddArc(0, $size - $d, $d, $d, 90, 90)
$path.CloseFigure()
$g.FillPath($brush, $path)

# Text 'PS'
$font = [System.Drawing.Font]::new('Arial', [float]13.0, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$textBrush = [System.Drawing.Brushes]::White
$sf = New-Object System.Drawing.StringFormat
$sf.Alignment = [System.Drawing.StringAlignment]::Center
$sf.LineAlignment = [System.Drawing.StringAlignment]::Center
$textRect = New-Object System.Drawing.RectangleF 0, 1, $size, $size
$g.DrawString('PS', $font, $textBrush, $textRect, $sf)

$ms = New-Object System.IO.MemoryStream
$bmp.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
$pngBytes = $ms.ToArray()

# Build ICO
$icoStream = New-Object System.IO.MemoryStream
$bw = New-Object System.IO.BinaryWriter $icoStream
$bw.Write([UInt16]0)
$bw.Write([UInt16]1)
$bw.Write([UInt16]1)

$bw.Write([Byte]$size)
$bw.Write([Byte]$size)
$bw.Write([Byte]0)
$bw.Write([Byte]0)
$bw.Write([UInt16]1)
$bw.Write([UInt16]32)
$bw.Write([UInt32]$pngBytes.Length)
$bw.Write([UInt32]22)

$bw.Write($pngBytes)
$bw.Flush()

[System.IO.File]::WriteAllBytes('public\favicon.ico', $icoStream.ToArray())
[System.IO.File]::WriteAllBytes('public\favicon.png', $pngBytes)
Write-Output 'Favicon generated successfully!'
