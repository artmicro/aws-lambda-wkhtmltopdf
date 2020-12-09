FROM amazonlinux:2

RUN yum install -y gcc-c++ make
RUN curl -sL https://rpm.nodesource.com/setup_12.x | bash -
RUN yum install -y nodejs

VOLUME /var/task
ENV LAMBDA_TASK_ROOT=/var/task
WORKDIR /var/task
CMD ["node", "test.js"]
