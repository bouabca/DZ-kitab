# CI/CD Configuration

## Overview
This project uses GitHub Actions for continuous integration and deployment. Security testing is integrated into the pipeline.

## Workflows

### CI/CD Pipeline (`ci-cd.yml`)
- Runs tests on every push and pull request
- Performs security scanning
- Builds and pushes Docker images to Docker Hub for main branch
- Deploys to production when changes are merged to main

### Security Testing (`security.yml`)
- Runs daily security scans
- Checks for vulnerabilities in dependencies
- Performs code analysis for security issues
- Uploads results to GitHub Security tab

## Secrets Required

The following secrets need to be configured in your GitHub repository settings:

- `SNYK_TOKEN`: Token for Snyk security scanning
- `DOCKERHUB_USERNAME`: Docker Hub username
- `DOCKERHUB_TOKEN`: Docker Hub access token

To add these secrets:
1. Go to your repository on GitHub
2. Navigate to Settings > Secrets and variables > Actions
3. Click "New repository secret" and add each of the above secrets

## Docker Configuration

The application is containerized using Docker. The workflow builds and pushes images to Docker Hub when changes are merged to the main branch.

Make sure to update the `YOUR_DOCKERHUB_USERNAME` and `YOUR_REPOSITORY_NAME` placeholders in the workflow file with your actual Docker Hub repository details.