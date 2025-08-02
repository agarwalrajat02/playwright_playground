pipeline {
  agent any

  tools {
    nodejs "NodeJS 18" // your Node version name in Jenkins
  }

  stages {
    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npx playwright test --reporter=line,allure-playwright'
      }
    }

    stage('Generate Allure Report') {
      steps {
        allure([
          includeProperties: false,
          jdk: '',
          reportBuildPolicy: 'ALWAYS',
          results: [[path: 'allure-results']]
        ])
      }
    }
  }

  post {
    always {
      emailext(
        to: 'agarwalrajat01@gmail.com',
        subject: "Build #${env.BUILD_NUMBER} - ${currentBuild.currentResult}",
        body: """
          <p>Build Result: <strong>${currentBuild.currentResult}</strong></p>
          <p>See build: <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>
          <p>Allure Report: <a href="${env.BUILD_URL}allure">Click here</a></p>
        """,
        mimeType: 'text/html'
      )
    }
  }
}
