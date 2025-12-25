#!/bin/bash
echo "🔨 Building project..."
npm run build

echo "📤 Uploading to server..."
scp -r dist/* root@64.227.168.42:/var/www/sacred-website/

echo "✅ Deployment complete!"
echo "🌐 Visit: https://sacred-website.mymultimeds.com"
