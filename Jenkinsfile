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
            subject: "Test Email",
            body: "This is a plain text email to test Jenkins email delivery.",
            to: "agarwalrajat01@gmail.com",
            mimeType: 'text/plain'
        )
    }
}

}
