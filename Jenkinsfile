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
            subject: "Jenkins Build: ${env.JOB_NAME} [#${env.BUILD_NUMBER}] - ${currentBuild.currentResult}",
            body: """Hi Rajat,

The Jenkins job '${env.JOB_NAME}' has completed with status: ${currentBuild.currentResult}.

Build URL: ${env.BUILD_URL}

Thanks,
Jenkins
""",
            to: 'agarwalrajat01@gmail.com'
        )
    }
}

}
