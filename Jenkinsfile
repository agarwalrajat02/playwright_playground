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
            echo 'Post actions running...'
            emailext(
                subject: "Build: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """<p>Build Result: ${currentBuild.currentResult}</p>
                         <p>Console: <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>""",
                to: 'your.email@gmail.com',
                mimeType: 'text/html'
            )
        }
    }
}
