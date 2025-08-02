pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }

    post {
        always {
            echo 'This runs always'
        }
        success {
            echo 'Build succeeded'
        }
        failure {
            echo 'Build failed'
        }
        unstable {
            echo 'Build is unstable'
        }
        changed {
            echo 'Build status changed'
        }
        // ✅ Email step (place here)
        always {
            emailext (
                subject: "Build: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """<p>Build Result: ${currentBuild.currentResult}</p>
                         <p>Console: <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>""",
                to: 'agarwalrajat01@gmail.com',
                mimeType: 'text/html'
            )
        }
    }
}
