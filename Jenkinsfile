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
        emailext(
            to: 'agarwalrajat01@gmail.com',
            subject: "Build ${currentBuild.fullDisplayName} - ${currentBuild.currentResult}",
            body: """<p>Hi Rajat,</p>
<p>The Jenkins job <b>${env.JOB_NAME}</b> has completed with status: <b>${currentBuild.currentResult}</b>.</p>
<p>Check the details at: <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>""",
            mimeType: 'text/html'
        )
    }
}

}
