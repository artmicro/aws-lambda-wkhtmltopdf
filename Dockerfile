FROM amazonlinux:2

RUN yum install -y gcc-c++ make
RUN curl -sL https://rpm.nodesource.com/setup_12.x | bash -
RUN yum install -y nodejs
# This is so we can list the available fonts via
# FONTCONFIG_PATH=/var/task/fonts fc-list
RUN yum install -y fontconfig

VOLUME /var/task
ENV LAMBDA_TASK_ROOT=/var/task
WORKDIR /var/task
CMD ["node", "test.js"]
