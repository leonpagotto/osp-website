#!/bin/bash

# Quick deployment script for OSP Website
echo "🚀 Deploying OSP Website to Firebase..."

# Deploy to Firebase Hosting
firebase deploy --only hosting

echo "✅ Deployment complete!"
echo "🌐 Live at: https://osp-website-2026.web.app"
